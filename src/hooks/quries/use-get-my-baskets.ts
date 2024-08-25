import { get } from '@/libs/api/client';
import { type MyBasket } from '@/types/basket';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

interface BasketsResponse {
  size: number;
  content: MyBasket[];
  last: number;
}

export const MY_BASKETS_QUERY_KEY = 'getMyBaskets';

export const getMyBaskets = async (pageParam: number) => {
  const data = await get<BasketsResponse>(`/baskets?size=20&page=${pageParam}`);

  return data;
};

export const useGetMyBaskets = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [MY_BASKETS_QUERY_KEY],
    queryFn: async ({ pageParam }) => await getMyBaskets(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.last) {
        return null;
      }

      return allPages.length + 1;
    },
    select: data => data.pages.flatMap(({ content }) => content),
    initialPageParam: 1,
  });
};
