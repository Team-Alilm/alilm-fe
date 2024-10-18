import { get } from '@/libs/api/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export const KAKAO_LOGIN_QUERY_KEY = 'getKakaoLogin';

interface KakaoLoginResponse {
  nothing: string;
}

// todo  : data가 필요없는 api인데 어떻게 처리하면 좋을까요?
export const getKakaoLogin = async () => {
  await get<KakaoLoginResponse>(`/oauth2/authorization/kakao`);
};

export const useGetKakaoLogin = () => {
  return useSuspenseQuery({
    queryKey: [KAKAO_LOGIN_QUERY_KEY],
    queryFn: async () => await getKakaoLogin(),
  });
};
