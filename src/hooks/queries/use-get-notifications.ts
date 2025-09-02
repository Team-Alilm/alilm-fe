import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

export interface AlimHistoryItem {
  alilmId: number;
  productId: number;
  name: string;
  imageUrl: string;
  brand: string;
  price: number;
  firstOption: string;
  secondOption: string;
  thirdOption: string;
  readYn: boolean;
  createdDate: number;
}

export interface NotificationProps {
  data: { notificationResponseList: AlimHistoryItem[] };
}

export const NOTIFICATION_HISTORY_QUERY_KEY = 'getNotificationsHistory';

export const getNotifications = async () => {
  const data = await get<NotificationProps>('/notifications/recent');

  return data;
};

export const useGetNotifications = () => {
  return useQuery({
    queryKey: [NOTIFICATION_HISTORY_QUERY_KEY],
    queryFn: getNotifications,
  });
};
