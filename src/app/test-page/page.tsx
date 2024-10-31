'use client';

import { useState } from 'react';
import axios from 'axios';

const MUSINSA_API_URL_TEMPLATE =
  'https://goods-detail.musinsa.com/api2/goods/%s/options?goodsSaleType=SALE';

function ProductFetcher() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);

  function extractProductNumber(productUrl: string): string {
    const match = productUrl.match(/\/products\/(\d+)/);

    return match ? match[1] : '';
  }

  const fetchData = async () => {
    const number = extractProductNumber(url);
    const finalUrl = MUSINSA_API_URL_TEMPLATE.replace('%s', number);

    try {
      const response = await axios.get(finalUrl);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('데이터를 가져오는 중 에러 발생', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="상품 API URL 입력"
      />
      <button onClick={fetchData}>데이터 가져오기</button>
    </div>
  );
}

export default ProductFetcher;

// 'use client';

// import { useEffect, useState } from 'react';

// const Test = () => {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://www.musinsa.com/products/2885222');
//         const html = await response.text();

//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');

//         const productName = doc
//           .querySelector('meta[property="product:brand"]')
//           ?.getAttribute('content');
//         const category = doc.querySelector('CSS_SELECTOR_FOR_CATEGORY')?.textContent;

//         console.log(doc);
//       } catch (error) {
//         console.error('데이터를 가져오는 중 에러 발생', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return <div>dd</div>;
// };

// export default Test;
