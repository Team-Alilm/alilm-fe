import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

import { type UseQueryCustomOptions } from '../api-types/types';

export const MY_INFO_QUERY_KEY = 'members/me';

export const getMyInfo = async () => {
  const data = await get<UseGetMyInfoResponse>(`/${MY_INFO_QUERY_KEY}`);

  return data;
};

export interface UseGetMyInfoResponse {
  data: {
    id: number;
    nickname: string;
    email: string;
    provider: string;
  };
}

export default function useGetMyInfo(options?: UseQueryCustomOptions<UseGetMyInfoResponse>) {
  const queryKey = [MY_INFO_QUERY_KEY];
  const queryFn = async () => await getMyInfo();

  return useQuery({
    queryKey,
    queryFn,
    // staleTime: 1000 * 60 * 60, // 1시간
    ...options,
  });
}
