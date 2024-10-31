import { post } from '@/libs/api/client';
import { useModalStore } from '@/store/use-modal-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BASKETS_QUERY_KEY } from '../queries/use-get-baskets';

const postCopyBaskets = async (productId: number) => {
  await post('/baskets/copy', { productId });
};

export const useCopyBaskets = () => {
  const queryClient = useQueryClient();
  const onOpen = useModalStore(state => state.onOpen);

  return useMutation({
    mutationFn: async (productId: number) => await postCopyBaskets(productId),
    onSuccess: () => {
      onOpen({ modalType: 'alert', title: '함께 기다리기 성공!' });
      queryClient.invalidateQueries({ queryKey: [BASKETS_QUERY_KEY] });
    },
    onError: error => {
      if (error.message.includes('ALILM-008')) {
        const errorMessage = error.message.split(' : ')[1].trim();
        onOpen({ modalType: 'alert', title: errorMessage });
      }
    },
  });
};
