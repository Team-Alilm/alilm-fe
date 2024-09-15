import { get } from '@/libs/api/client';
import { type Basket } from '@/types/basket';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

interface BasketsResponse {
  size: number;
  content: Basket[];
  last: number;
}

export const BASKETS_QUERY_KEY = 'getBaskets';

export const getBaskets = async (pageParam: number) => {
  const data = await get<BasketsResponse>(`/baskets?size=9&page=${pageParam}`);

  return data;
};

export const useGetBaskets = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [BASKETS_QUERY_KEY],
    queryFn: async ({ pageParam }) => await getBaskets(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.last) {
        return null;
      }

      return allPages.length;
    },
    select: data => data.pages.flatMap(({ content }) => content),
    initialPageParam: 0,
  });
};
