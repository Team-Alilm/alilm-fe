import { get } from '@/libs/api/client';
import { type Basket } from '@/types/basket';
import { useInfiniteQuery } from '@tanstack/react-query';

interface BasketsResponse {
  size: number;
  contents: Basket[];
  last: boolean;
  hasNext: boolean;
}

export const BASKETS_QUERY_KEY = 'getBaskets';

export const getBaskets = async (pageParam: number) => {
  return await get<BasketsResponse>(`/products?size=9&page=${pageParam}`);
};

export const useGetBaskets = () => {
  return useInfiniteQuery({
    queryKey: [BASKETS_QUERY_KEY],
    queryFn: async ({ pageParam }) => await getBaskets(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNext ? allPages.length : null;
    },
    select: data => data.pages.flatMap(({ contents }) => contents),
    initialPageParam: 0,
  });
};
