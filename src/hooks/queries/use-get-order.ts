import { get } from '@/libs/api/client';
import { type Product } from '@/types/basket';
import { useInfiniteQuery } from '@tanstack/react-query';

interface ProductsResponse {
  data: {
    customSlice: {
      size: number;
      contents: Product[];
      hasNext: boolean;
    };
  };
}

type Cursor = {
  lastProductId: number;
  price: number;
  waitingCount: number;
};

export const getProducts = async ({
  category,
  sort,
  size = 9,
  lastProductCursor,
}: {
  category: string;
  sort: string;
  size?: number;
  lastProductCursor?: Cursor;
}): Promise<ProductsResponse> => {
  const query = new URLSearchParams();
  query.append('size', size.toString());
  if (category) query.append('category', category);
  if (sort) query.append('sort', sort);

  if (lastProductCursor) {
    query.append('lastProductId', String(lastProductCursor.lastProductId));
    query.append('price', String(lastProductCursor.price));
    query.append('waitingCount', String(lastProductCursor.waitingCount));
  }

  return await get<ProductsResponse>(`/products?${query.toString()}`);
};

export const useGetOrderResponse = (category: string, sort: string) => {
  return useInfiniteQuery<
    ProductsResponse, // API 응답 타입
    Error, // 에러 타입
    Product[], // select 후 반환 타입
    [string, string, string], // queryKey 타입
    Cursor | undefined // pageParam 타입
  >({
    queryKey: ['getProducts', category, sort],
    queryFn: ({ pageParam }) =>
      getProducts({
        category,
        sort,
        lastProductCursor: pageParam,
      }),
    getNextPageParam: (lastPage): Cursor | undefined => {
      const contents = lastPage.data.customSlice.contents;

      if (contents.length === 0) return undefined;

      const last = contents.at(-1);
      if (!last) return undefined;

      return {
        lastProductId: last.id,
        price: last.price,
        waitingCount: last.waitingCount ?? 0,
      };
    },
    select: data => data.pages.flatMap(page => page.data.customSlice.contents),
    initialPageParam: undefined,
  });
};
