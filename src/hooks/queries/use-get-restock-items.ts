import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

export interface RestockItem {
  productId: number;
  productThumbnailUrl: string;
}

interface RestockResponse {
  recentlyRestockedProductResponseList: RestockItem[];
}

export const RESTOCK_QUERY_KEY = 'getRestock';

export const getRestockResponse = async () => {
  const data = await get<RestockResponse>('/products/recently-restocked');

  return data;
};

export const useGetRestockResponse = () => {
  return useQuery({
    queryKey: [RESTOCK_QUERY_KEY],
    queryFn: getRestockResponse,
  });
};
