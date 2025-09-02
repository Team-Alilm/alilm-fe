import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';
import { useModalStore } from '@/store/use-modal-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MY_INFO_QUERY_KEY, type UseGetMyInfoResponse } from '../queries/use-get-my-info';

const postEditEmail = async (userInfo: UseGetMyInfoResponse) => {
  await post('/members', userInfo);
};

export const useEditEmail = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const onOpen = useModalStore(state => state.onOpen);

  return useMutation({
    mutationFn: postEditEmail,
    onSuccess: () => {
      onOpen({ modalType: 'alert', title: '이메일 변경 성공!' });
      router.replace('/mypage');
      queryClient.invalidateQueries({ queryKey: [MY_INFO_QUERY_KEY] });
    },
    onError: () =>
      onOpen({ modalType: 'alert', title: '이메일 변경 실패', description: '다시 시도해주세요.' }),
  });
};
