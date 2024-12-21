import { get } from '@/libs/api/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface ProductsCrawlingResponse {
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
}

export const PRODUCTS_CRAWLING_QUERY_KEY = 'getProductsCrawling';

export const getProductsCrawling = async (url: string) => {
  const data = await get<ProductsCrawlingResponse>(`/products/crawling?url=${url}`);
  console.log(data);

  return data;
};

export const useGetProductsCrawling = (url: string) => {
  return useSuspenseQuery({
    queryKey: [PRODUCTS_CRAWLING_QUERY_KEY],
    queryFn: async () => await getProductsCrawling(url),
    retry: false,
  });
};
