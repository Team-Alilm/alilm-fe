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

export const getAccessToken = () => {
  if (typeof window === 'undefined') return null; // SSR 방어
  return localStorage.getItem('accessToken');
};

export const getOldResponse = async () => {
  const token = getAccessToken(); // 토큰을 외부에서 가져오도록
  if (!token) throw new Error('로그인 필요');

  const data = await get<OldResponse>('/baskets/old', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!data) throw new Error('oldResponse를 가져올 수 없음');

  return data;
};

export const useGetOldResponse = (accessToken?: String) => {
  return useQuery({
    queryKey: [RESTOCK_QUERY_KEY],
    queryFn: getOldResponse,
    enabled: !!accessToken,
  });
};
