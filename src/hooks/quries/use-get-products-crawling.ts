import { get } from '@/libs/api/client';
import { useSuspenseQuery } from '@tanstack/react-query';

interface ProductsCrawlingResponse {
  number: number;
  name: string;
  brand: string;
  imageUrl: string;
  category: string;
  price: number;
  store: string;
  firstOptions: string[];
  secondOptions: string[];
  thirdOptions: string[];
}

export const PRODUCTS_CRAWLING_QUERY_KEY = 'getProductsCrawling';

export const getProductsCrawling = async (url: string) => {
  const data = await get<ProductsCrawlingResponse>(`/products/crawling?_url=${url}`);

  return data;
};

export const useGetProductsCrawling = (url: string) => {
  return useSuspenseQuery({
    queryKey: [PRODUCTS_CRAWLING_QUERY_KEY],
    queryFn: async () => await getProductsCrawling(url),
  });
};
