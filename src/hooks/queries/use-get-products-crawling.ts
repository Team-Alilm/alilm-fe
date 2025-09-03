import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

export interface ProductsCrawlingResponse {
  data: {
    number: number;
    name: string;
    brand: string;
    thumbnailUrl: string;
    imageUrlList: string[];
    store: string;
    price: number;
    firstCategory: 'string';
    secondCategory: 'string';
    firstOptions: string[];
    secondOptions: string[];
    thirdOptions: string[];
  };
}

export const PRODUCTS_CRAWLING_QUERY_KEY = 'getProductsCrawling';

export const getProductsCrawling = async (url: string) => {
  try {
    const data = await get<ProductsCrawlingResponse>(`/products/crawl?productUrl=${url}`);

    return data;
  } catch (error) {
    throw new Error('상품 정보를 불러오는 데 실패했습니다.');
  }
};

export const useGetProductsCrawling = (url: string) => {
  return useQuery({
    queryKey: [PRODUCTS_CRAWLING_QUERY_KEY],
    queryFn: async () => await getProductsCrawling(url),
    retry: false,
  });
};
