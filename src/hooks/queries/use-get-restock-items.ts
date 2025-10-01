import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

export interface RestockItem {
  productId: number;
  name: string;
  brand: string;
  thumbnailUrl: string;
  price?: number;
}

interface RestockApiResponse {
  code: string;
  message: string;
  data: {
    recentlyRestockedProductResponseList: RestockItem[];
  };
}

interface RestockResponse {
  recentlyRestockedProductResponseList: RestockItem[];
}

export const RESTOCK_QUERY_KEY = 'getRestock';

export const getRestockResponse = async (): Promise<RestockResponse> => {
  const response = await get<RestockApiResponse>('/products/recently-restocked');

  return {
    recentlyRestockedProductResponseList: response.data.recentlyRestockedProductResponseList,
  };
};

export const useGetRestockResponse = () => {
  return useQuery({
    queryKey: [RESTOCK_QUERY_KEY],
    queryFn: getRestockResponse,
  });
};
