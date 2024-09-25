import { messaging } from '@/libs/firebase';
import { getToken } from 'firebase/messaging';

const VAPID_KEY = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

/**
 * 알림 권한 요청 및 FCM 토큰 발급
 */
export const getFcmToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey: VAPID_KEY });
      console.log('FCM token:', token);
    } else {
      console.log('알림 권한 거부됨');
    }
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

export default getFcmToken;
