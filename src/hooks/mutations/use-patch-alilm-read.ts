import { patch } from '@/libs/api/client';
import { useMutation } from '@tanstack/react-query';

const patchAlilimRead = async (alilmIdList: number[]) => {
  await patch('/member/my-alilm-read', { alilmIdList });
};

export const usePatchAlilmRead = () => {
  return useMutation({
    mutationFn: patchAlilimRead,
  });
};
