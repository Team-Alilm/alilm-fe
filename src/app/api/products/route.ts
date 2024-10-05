// app/api/products/route.ts

import { type NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

const MUSINSA_API_URL_TEMPLATE =
  'https://goods-detail.musinsa.com/api2/goods/%s/options?goodsSaleType=SALE';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || !url.includes('musinsa')) {
      return NextResponse.json({ error: '지원하지 않는 URL 입니다.' }, { status: 400 });
    }

    const decodedUrl = decodeURIComponent(url);
    const productNumber = extractProductNumber(decodedUrl);

    const [pageContent, soldoutCheckResponse] = await Promise.all([
      fetchPageContent(decodedUrl),
      fetchSoldoutCheckResponse(productNumber),
    ]);

    const $ = cheerio.load(pageContent);
    const scriptContent = $('script').text();
    const jsonData = extractJsonData(scriptContent, 'window.__MSS__.product.state');
    const productData = JSON.parse(jsonData || '{}');

    const options = extractOptions(soldoutCheckResponse);

    const result = {
      number: productData.goodsNo,
      name: productData.goodsNm,
      brand: productData.brand,
      imageUrl: `https://image.msscdn.net${productData.thumbnailImageUrl}`,
      category: productData.category?.categoryDepth1Title,
      price: productData.goodsPrice?.maxPrice,
      store: 'MUSINSA',
      firstOptions: options.first,
      secondOptions: options.second,
      thirdOptions: options.third,
    };

    console.log('Product data:', result);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing request:', error);

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function extractProductNumber(url: string): string {
  const match = url.match(/\/products\/(\d+)/);

  return match ? match[1] : '';
}

async function fetchPageContent(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch page content');

  return response.text();
}

async function fetchSoldoutCheckResponse(number: string) {
  const url = MUSINSA_API_URL_TEMPLATE.replace('%s', number);
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch soldout check response');

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

function extractOptions(response: any): { first: string[]; second: string[]; third: string[] } {
  const firstOptions = response.data.basic[0]?.optionValues.map((ov: any) => ov.name) || [];
  const secondOptions = response.data.basic[1]?.optionValues.map((ov: any) => ov.name) || [];
  const thirdOptions = response.data.basic[2]?.optionValues.map((ov: any) => ov.name) || [];

  return { first: firstOptions, second: secondOptions, third: thirdOptions };
}
