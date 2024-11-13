import { type NextRequest, NextResponse } from 'next/server';
import { ERROR_CODE } from '@/utils/error-code';
import * as cheerio from 'cheerio';

const MUSINSA_API_URL_TEMPLATE = 'https://goods.musinsa.com/api2/review/v1/view/filter?goodsNo=%s';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || !url.includes('musinsa')) {
      return NextResponse.json({ error: ERROR_CODE.UNSUPPORTED_URL }, { status: 400 });
    }

    /**
     * 딥링크일 경우 리다이렉션을 따라가 최종 URL 획득
     */
    const finalUrl = await getFinalUrl(url);

    const productNumber = extractProductNumber(finalUrl);
    if (!productNumber) {
      return NextResponse.json({ error: ERROR_CODE.INVALID_PRODUCT_URL }, { status: 400 });
    }

    const decodedUrl = decodeURIComponent(finalUrl);
    const [pageContent, soldoutCheckResponse] = await Promise.all([
      fetchPageContent(decodedUrl),
      fetchSoldoutCheckResponse(productNumber),
    ]);

    const $ = cheerio.load(pageContent);
    const scriptContent = $('script').text();
    const jsonData = extractJsonData(scriptContent, 'window.__MSS__.product.state');

    if (!jsonData) {
      return NextResponse.json({ error: ERROR_CODE.PRODUCT_NOT_FOUND }, { status: 404 });
    }

    const productData = JSON.parse(jsonData);

    if (!productData.goodsNo) {
      return NextResponse.json({ error: ERROR_CODE.PRODUCT_NOT_FOUND }, { status: 404 });
    }

    const options = extractOptions(soldoutCheckResponse);

    const goodsImages = productData.goodsImages
      ?.map((image: { imageUrl: string[] }) => `https://image.msscdn.net${image.imageUrl}`)
      .slice(0, 3);

    const productImageUrl = goodsImages.length > 3 ? goodsImages.slice(0, 3) : goodsImages;

    const result = {
      number: productData.goodsNo,
      name: productData.goodsNm,
      brand: productData.brand,
      thumbnailUrl: `https://image.msscdn.net${productData.thumbnailImageUrl}`,
      imageUrlList: productImageUrl ? productImageUrl : [],
      category: productData.category?.categoryDepth1Title,
      price: productData.goodsPrice?.maxPrice,
      store: 'MUSINSA',
      firstOptions: options.first,
      secondOptions: options.second,
      thirdOptions: options.third,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing request:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: ERROR_CODE.FETCH_FAILED }, { status: 500 });
    }

    return NextResponse.json({ error: ERROR_CODE.INTERNAL_SERVER_ERROR }, { status: 500 });
  }
}

async function getFinalUrl(url: string): Promise<string> {
  const response = await fetch(url, {
    method: 'HEAD',
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error('Failed to resolve the URL');
  }

  return response.url;
}

function extractProductNumber(url: string): string {
  const match = url.match(/\/products\/(\d+)/);

  return match ? match[1] : '';
}

async function fetchPageContent(url: string): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(ERROR_CODE.PAGE_NOT_FOUND);
    }
    throw new Error(ERROR_CODE.FETCH_FAILED);
  }

  return response.text();
}

async function fetchSoldoutCheckResponse(number: string) {
  const url = MUSINSA_API_URL_TEMPLATE.replace('%s', number);
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(ERROR_CODE.OPTIONS_NOT_FOUND);
    }
    throw new Error(ERROR_CODE.FETCH_FAILED);
  }

  return response.json();
}

function extractJsonData(scriptContent: string, variableName: string): string | null {
  const pattern = `${variableName} = `;
  const startIndex = scriptContent.indexOf(pattern);
  if (startIndex === -1) return null;

  const substring = scriptContent.substring(startIndex + pattern.length);
  const endIndex = substring.indexOf('};') + 1;

  return substring.substring(0, endIndex);
}

interface OptionValue {
  val: string;
}

interface Color {}

interface OptionItem {
  no: number;
  goodsNo: number;
  optionValueNos: number[];
  managedCode: string;
  price: number;
  activated: boolean;
  outOfStock: boolean;
  isDeleted: boolean;
  colors: Color[];
  remainQuantity: number;
}

interface ExtractOptionsResponse {
  meta: {
    result: string;
    errorCode: string;
    message: string;
  };
  data: {
    filterOption: {
      firstOptions?: OptionValue[];
      secondOptions?: OptionValue[];
      thirdOptions?: OptionValue[];
    };

    extra: unknown[];
    optionItems: OptionItem[];
  };
  error: null | unknown;
}

function extractOptions(response: ExtractOptionsResponse): {
  first: string[];
  second: string[];
  third: string[];
} {
  const firstOptions = response.data.filterOption.firstOptions?.map(ov => ov.val) || [];
  const secondOptions = response.data.filterOption.secondOptions?.map(ov => ov.val) || [];
  const thirdOptions = response.data.filterOption.thirdOptions?.map(ov => ov.val) || [];

  return { first: firstOptions, second: secondOptions, third: thirdOptions };
}
