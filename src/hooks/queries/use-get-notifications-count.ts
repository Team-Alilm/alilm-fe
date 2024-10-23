import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

interface NotificationsCountResponse {
  allCount: number;
  dailyCount: number;
}

export const NOTIFICATION_COUNT_QUERY_KEY = 'getNotificationCount';

export const getNotificationsCount = async () => {
  const data = await get<NotificationsCountResponse>('/notifications/count');

  return data;
};

export const useGetNotificationsCount = () => {
  return useQuery({
    queryKey: [NOTIFICATION_COUNT_QUERY_KEY],
    queryFn: async () => await getNotificationsCount(),
  });
};
