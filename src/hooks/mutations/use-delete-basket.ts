import { del } from '@/libs/api/client';
import { useModalStore } from '@/store/use-modal-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MY_BASKETS_QUERY_KEY } from '../queries/use-get-my-baskets';

const deleteBasket = async (basketId: number) => {
  await del(`/baskets/${basketId}`);
};

export const useDeleteBasket = () => {
  const queryClient = useQueryClient();
  const onOpen = useModalStore(state => state.onOpen);

  return useMutation({
    mutationFn: deleteBasket,
    onSuccess: () => {
      onOpen({ modalType: 'alert', title: '상품이 삭제되었습니다.' });
      queryClient.invalidateQueries({ queryKey: [MY_BASKETS_QUERY_KEY] });
    },
    onError: () => {
      onOpen({ modalType: 'alert', title: '상품 삭제 실패' });
    },
  });
};
