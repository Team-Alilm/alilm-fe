import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

export interface AlimHistoryItem {
  notificationId: number;
  productId: number;
  productName: string;
  productThumbnailUrl: string;
  productBrand: string;
  productPrice: number;
  firstOption: string;
  secondOption: string;
  readYn: boolean;
  createdData: number;
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
