import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

interface UnreadCountResponse {
  count: number;
}

export const READ_N_COUNT_QUERY_KEY = 'getReadNCount';

export const getUnreadCount = async () => {
  const response = await get<{ data: UnreadCountResponse }>('/notifications/unread-count');

  return response.data;
};

export const useGetUnreadCount = (accessToken: string | null) => {
  return useQuery({
    queryKey: [READ_N_COUNT_QUERY_KEY, accessToken],
    queryFn: getUnreadCount,
    staleTime: 5000,
    enabled: !!accessToken,
  });
};
