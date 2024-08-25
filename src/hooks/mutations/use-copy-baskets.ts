import { post } from '@/libs/api/client';
import { useMutation } from '@tanstack/react-query';

const postCopyBaskets = async (productId: number) => {
  await post('/baskets/copy', { productId });
};

export const useCopyBaskets = () => {
  return useMutation({
    mutationFn: async (productId: number) => await postCopyBaskets(productId),
  });
};
