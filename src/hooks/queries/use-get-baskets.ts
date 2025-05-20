import { get } from '@/libs/api/client';
import { type Product } from '@/types/basket';
import { useInfiniteQuery } from '@tanstack/react-query';

interface ProductsResponse {
  customSlice: {
    size: number;
    contents: Product[];
    last: boolean;
    hasNext: boolean;
  };
}

export const PRODUCTS_QUERY_KEY = 'getProducts';

export const getProducts = async ({
  pageParam,
  category,
}: {
  pageParam: number;
  category: string;
}) => {
  return await get<ProductsResponse>(`/products?size=9&page=${pageParam}&category=${category}`);
};

export const useGetProducts = (category: string) => {
  return useInfiniteQuery({
    queryKey: [PRODUCTS_QUERY_KEY, category],
    queryFn: async ({ pageParam = 0, queryKey }) => {
      const [, queryCategory] = queryKey;

      return await getProducts({ pageParam, category: queryCategory });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.customSlice.hasNext ? allPages.length : null;
    },
    select: data => data.pages.flatMap(page => page.customSlice.contents),
    initialPageParam: 0,
  });
};
