import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';
import { useModalStore } from '@/store/use-modal-store';
import { useToastStore } from '@/store/use-toast-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PRODUCTS_QUERY_KEY } from '../queries/use-get-baskets';
import { MY_BASKETS_QUERY_KEY } from '../queries/use-get-my-baskets';

export interface RegisteredBasketsParams {
  number: number;
  name: string;
  brand: string;
  imageUrlList: string[];
  firstCategory: string;
  secondCategory: string;
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
  const onOpen = useModalStore(state => state.onOpen);
  const showToast = useToastStore(state => state.showToast);

  return useMutation({
    mutationFn: async (params: RegisteredBasketsParams) => await postRegisteredBaskets(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_QUERY_KEY, MY_BASKETS_QUERY_KEY] });
      showToast('재입고 알림 상품이 등록되었습니다.');
      router.replace('/my-alilm');
    },
    onError: error => {
      onOpen({ modalType: 'alert', title: error.message });
    },
  });
};
