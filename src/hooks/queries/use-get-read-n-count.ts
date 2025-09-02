import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

interface ReadNCount {
  readNCount: number;
}

export const READ_N_COUNT_QUERY_KEY = 'getReadNCount';

export const getUnreadCount = async () => {
  const data = await get<ReadNCount>('/notifications/unread-count');

  return data;
};

export const useGetUnreadCount = (accessToken: string | null) => {
  return useQuery({
    queryKey: [READ_N_COUNT_QUERY_KEY, accessToken],
    queryFn: getUnreadCount,
    staleTime: 5000,
    enabled: !!accessToken,
  });
};
