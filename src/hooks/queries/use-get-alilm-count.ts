import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

interface MyAlilmCountsResponse {
  data: { registeredProductCount: number; receivedNotificationCount: number };
}

export const MY_ALILM_COUNTS_QUERY_KEY = 'getMyAlilmCounts';

export const getMyAlilmCounts = async () => {
  const data = await get<MyAlilmCountsResponse>('/members/statistics');

  return data.data;
};

export const useGetMyAlilmCounts = () => {
  return useQuery({
    queryKey: [MY_ALILM_COUNTS_QUERY_KEY],
    queryFn: getMyAlilmCounts,
  });
};
