import { useRouter } from 'next/navigation';
import { post } from '@/libs/api/client';
import { useModalStore } from '@/store/use-modal-store';
import { useToastStore } from '@/store/use-toast-store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';

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
  await post('/products', params);
};

const fireConfetti = () => {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
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

      // 폭죽 애니메이션
      fireConfetti();

      showToast('재입고 알림 상품이 등록되었습니다.');

      // 폭죽이 보이도록 딜레이 후 페이지 이동
      setTimeout(() => {
        router.replace('/mypage/my-alilm');
      }, 1500);
    },
    onError: error => {
      onOpen({ modalType: 'alert', title: error.message });
    },
  });
};
