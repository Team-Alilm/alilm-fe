import { type NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { url } = body;

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  let browser;
  try {
    const decodedUrl = decodeURIComponent(url);
    if (!decodedUrl.includes('musinsa')) {
      return NextResponse.json({ error: 'Unsupported URL' }, { status: 400 });
    }

    browser = await puppeteer.launch({
      headless: 'shell',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(decodedUrl, { waitUntil: 'networkidle0', timeout: 60000 });

    // Extract product information and options
    const productInfo = await page.evaluate(() => {
      const scriptContent = Array.from(document.getElementsByTagName('script'))
        .map(script => script.innerHTML)
        .find(content => content.includes('window.__MSS__.product.state'));

      if (!scriptContent) return null;

      const jsonData = extractJsonData(scriptContent, 'window.__MSS__.product.state');
      if (!jsonData) return null;

      const jsonObject = JSON.parse(jsonData);

      // Extract options directly from the product page
      const optionElements = document.querySelectorAll('.option_cont');
      const options: { [key: string]: string[] } = {};
      optionElements.forEach((optionElement: Element) => {
        const optionName = optionElement.querySelector('.option_title')?.textContent?.trim() || '';
        const optionValues = Array.from(optionElement.querySelectorAll('.list_item'))
          .map(item => item.textContent?.trim())
          .filter(Boolean) as string[];
        if (optionName && optionValues.length > 0) {
          options[optionName] = optionValues;
        }
      });

      return {
        number: jsonObject.goodsNo,
        name: jsonObject.goodsNm,
        brand: jsonObject.brand,
        imageUrl: `https://image.msscdn.net${jsonObject.thumbnailImageUrl}`,
        category: jsonObject.category.categoryDepth1Title,
        price: jsonObject.goodsPrice.maxPrice,
        options: options,
      };

      function extractJsonData(scriptContent, variableName) {
        const pattern = `${variableName} = `;
        const startIndex = scriptContent.indexOf(pattern);
        if (startIndex === -1) return null;

        const substring = scriptContent.substring(startIndex + pattern.length);
        const endIndex = substring.indexOf('};') + 1;

        return substring.substring(0, endIndex);
      }
    });

    if (!productInfo) {
      return NextResponse.json({ error: 'Failed to extract product information' }, { status: 500 });
    }

    const result = {
      ...productInfo,
      store: 'MUSINSA',
    };

    console.log('Product Info:', result);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Crawling Error', error);

    return NextResponse.json(
      { error: 'An error occurred while crawling the website', details: error.message },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// import { type NextRequest, NextResponse } from 'next/server';
// import puppeteer from 'puppeteer';

// const MUSINSA_API_URL_TEMPLATE = 'https://store.musinsa.com/app/goods/${goodsNo}/options';

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const { url } = body;

//   if (!url) {
//     return NextResponse.json({ error: 'URL is required' }, { status: 400 });
//   }

//   let browser;
//   try {
//     const decodedUrl = decodeURIComponent(url);
//     if (!decodedUrl.includes('musinsa')) {
//       return NextResponse.json({ error: 'Unsupported URL' }, { status: 400 });
//     }

//     browser = await puppeteer.launch({
//       headless: 'shell',
//       args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });
//     const page = await browser.newPage();
//     await page.goto(decodedUrl, { waitUntil: 'networkidle0', timeout: 60000 });

//     // Extract product information
//     const productInfo = await page.evaluate(() => {
//       const scriptContent = Array.from(document.getElementsByTagName('script'))
//         .map(script => script.innerHTML)
//         .find(content => content.includes('window.__MSS__.product.state'));

//       if (!scriptContent) return null;

//       const jsonData = extractJsonData(scriptContent, 'window.__MSS__.product.state');
//       if (!jsonData) return null;

//       const jsonObject = JSON.parse(jsonData);

//       return {
//         number: jsonObject.goodsNo,
//         name: jsonObject.goodsNm,
//         brand: jsonObject.brand,
//         imageUrl: `https://image.msscdn.net${jsonObject.thumbnailImageUrl}`,
//         category: jsonObject.category.categoryDepth1Title,
//         price: jsonObject.goodsPrice.maxPrice,
//       };

//       function extractJsonData(scriptContent, variableName) {
//         const pattern = `${variableName} = `;
//         const startIndex = scriptContent.indexOf(pattern);
//         if (startIndex === -1) return null;

//         const substring = scriptContent.substring(startIndex + pattern.length);
//         const endIndex = substring.indexOf('};') + 1;

//         return substring.substring(0, endIndex);
//       }
//     });

//     if (!productInfo) {
//       return NextResponse.json({ error: 'Failed to extract product information' }, { status: 500 });
//     }

//     // Fetch soldout check response
//     const soldoutCheckUrl = MUSINSA_API_URL_TEMPLATE.replace('${goodsNo}', productInfo.number);
//     await page.goto(soldoutCheckUrl, { waitUntil: 'networkidle0' });

//     const soldoutCheckResponse = await page.evaluate(() => {
//       const content = document.body.textContent;
//       if (!content) return null;
//       try {
//         return JSON.parse(content);
//       } catch (e) {
//         console.error('Error parsing JSON:', e);

//         return { rawContent: content };
//       }
//     });

//     if (!soldoutCheckResponse) {
//       return NextResponse.json(
//         { error: 'Failed to fetch soldout check response' },
//         { status: 500 }
//       );
//     }

//     // Extract options
//     const options = extractOptions(soldoutCheckResponse);

//     const result = {
//       ...productInfo,
//       store: 'MUSINSA',
//       firstOptions: options.first,
//       secondOptions: options.second,
//       thirdOptions: options.third,
//     };

//     console.log('Product Info:', result);

//     return NextResponse.json(result);
//   } catch (error: any) {
//     console.error('Crawling Error', error);

//     return NextResponse.json(
//       { error: 'An error occurred while crawling the website', details: error.message },
//       { status: 500 }
//     );
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//   }
// }

// function extractOptions(response: any): { first: string[]; second: string[]; third: string[] } {
//   if (!response || !response.data || !response.data.basic) {
//     console.warn('Unexpected response structure:', response);

//     return { first: [], second: [], third: [] };
//   }

//   const firstOptions = response.data.basic[0]?.optionValues.map((opt: any) => opt.name) || [];
//   const secondOptions = response.data.basic[1]?.optionValues.map((opt: any) => opt.name) || [];
//   const thirdOptions = response.data.basic[2]?.optionValues.map((opt: any) => opt.name) || [];

//   return { first: firstOptions, second: secondOptions, third: thirdOptions };
// }
