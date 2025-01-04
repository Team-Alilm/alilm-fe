import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';
import { useModalStore } from '@/store/use-modal-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PRODUCTS_QUERY_KEY } from '../queries/use-get-baskets';

const postCopyBaskets = async (productId: number) => {
  await post('/baskets/copy', { productId });

  return productId;
};

export const useCopyBaskets = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const onOpen = useModalStore(state => state.onOpen);
  const handleOnclick = (productId: number) => () => {
    router.push(`/product/${productId}`);
  };

  return useMutation({
    mutationFn: async (productId: number) => await postCopyBaskets(productId),
    onSuccess: (productId: number) => {
      onOpen({
        modalType: 'alert',
        title: '함께 기다리기 성공!',
        onClick: handleOnclick(productId),
      });
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_QUERY_KEY] });
    },
    onError: error => {
      if (error.message.includes('ALILM-008')) {
        const errorMessage = error.message.split(' : ')[1].trim();
        onOpen({ modalType: 'alert', title: errorMessage });
      }
    },
  });
};
