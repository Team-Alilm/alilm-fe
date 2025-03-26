import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

export interface RestockItem {
  productId: number;
  productThumbnailUrl: string;
}

interface RestockResponse {
  productList: RestockItem[];
}

export const RESTOCK_QUERY_KEY = 'getRestock';

export const getRestockResponse = async () => {
  const data = await get<RestockResponse>('/alilms/restock/ranking?count=7');

  return data;
};

export const useGetRestockResponse = () => {
  return useQuery({
    queryKey: [RESTOCK_QUERY_KEY],
    queryFn: getRestockResponse,
  });
};
