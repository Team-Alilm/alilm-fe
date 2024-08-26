import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BASKETS_QUERY_KEY } from '../quries/use-get-baskets';
import { MY_BASKETS_QUERY_KEY } from '../quries/use-get-my-baskets';

export interface RegisteredBasketsParams {
  number: number;
  name: string;
  brand: string;
  imageUrl: string;
  category: string;
  price: number;
  store: string;
  firstOption: string;
  secondOption?: string | null;
  thirdOption?: string | null;
}

const postRegisteredBaskets = async (params: RegisteredBasketsParams) => {
  await post('/baskets/registered', params);
};

export const useRegisteredBaskets = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (params: RegisteredBasketsParams) => await postRegisteredBaskets(params),
    onSuccess: () => {
      alert('상품 등록 성공!');
      queryClient.invalidateQueries({ queryKey: [BASKETS_QUERY_KEY, MY_BASKETS_QUERY_KEY] });
      router.replace('/');
    },
  });
};
