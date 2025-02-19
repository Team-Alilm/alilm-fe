import { get } from '@/libs/api/client';
import { useQuery } from '@tanstack/react-query';

interface Notification {
  alimHistoryList: {
    alilmId: number;
    productid: number;
    name: string;
    imageUrl: string;
    brand: string;
    price: number;
    firstOption: string;
    secondOption: string;
    thirdOption: string;
    readYn: boolean;
  }[];
}

export const NOTIFICATION_HISTORY_QUERY_KEY = 'getNotificationsHistory';

export const getNotifications = async () => {
  const data = await get<Notification>('/member/my-alilm-history');

  return data;
};

export const useGetNotifications = () => {
  return useQuery({
    queryKey: [NOTIFICATION_HISTORY_QUERY_KEY],
    queryFn: getNotifications,
  });
};
