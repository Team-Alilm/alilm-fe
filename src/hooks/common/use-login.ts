import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();

  const kakaoLogin = () => {
    router.push(`https://alilm.store/oauth2/authorization/kakao`);
  };

  return { kakaoLogin };
};
