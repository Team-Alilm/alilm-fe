import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';
import { useModalStore } from '@/store/use-modal-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MY_INFO_QUERY_KEY } from '../quries/use-get-my-info';

const postEditEmail = async (email: string) => {
  await post('/mypage/edit-email', { email });
};

export const useEditEmail = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const onOpen = useModalStore(state => state.onOpen);

  return useMutation({
    mutationFn: async (email: string) => await postEditEmail(email),
    onSuccess: () => {
      onOpen({ modalType: 'alert', title: '이메일 변경 성공!' });
      router.replace('/mypage');
      queryClient.invalidateQueries({ queryKey: [MY_INFO_QUERY_KEY] });
    },
    onError: () => onOpen({ modalType: 'alert', title: '이메일 변경 실패' }),
  });
};
