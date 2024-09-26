import { post } from '@/libs/api/client';

export const postFcmToken = async (fcmToken: string) => {
  await post('/fcm-tokens', { fcmToken });
};
