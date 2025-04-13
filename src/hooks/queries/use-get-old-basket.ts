import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

interface OldItem {
  thumbnailUrl: string;
  brand: string;
  store: string;
  price: number;
  category: string;
  productId: number;
  createdDate: number;
}

interface OldList {
  thumbnailUrl: string;
  brand: string;
  store: string;
  price: number;
  productId: number;
  category: string;
}

interface OldResponse {
  oldProduct: OldItem;
  relatedProductList: OldList[];
}

export const RESTOCK_QUERY_KEY = 'getOld';

export const getOldResponse = async () => {
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJtZW1iZXJJZCI6MSwiaWF0IjoxNzQxMTc2MTE5LCJleHAiOjQzMzMxNzYxMTl9.wp59R_vPNAYEZ1Ozv_Z5TTVV4oEu5TpAOMJQFUePywSCknYJQgfJaczjOlVinPYX9tPxjDhALbMaAIZx9n90Sw';
  const data = await get<OldResponse>('/baskets/old', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!data) throw new Error('oldResponse를 가져올 수 없음');

  return data;
};

export const useGetOldResponse = () => {
  return useQuery({
    queryKey: [RESTOCK_QUERY_KEY],
    queryFn: getOldResponse,
  });
};
