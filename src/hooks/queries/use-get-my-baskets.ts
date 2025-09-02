import { get } from '@/libs/api/client';
import { type MyBasket } from '@/types/basket';
import { useQuery } from '@tanstack/react-query';

type BasketsResponse = {
  data: {
    myBasketProductList: MyBasket[];
  };
};

export const MY_BASKETS_QUERY_KEY = 'getMyBaskets';

export const getMyBaskets = async () => {
  const data = await get<BasketsResponse>('/baskets/my');

  return data.data;
};

export const useGetMyBaskets = () => {
  return useQuery({
    queryKey: [MY_BASKETS_QUERY_KEY],
    queryFn: async () => await getMyBaskets(),
    retry: 1,
  });
};
