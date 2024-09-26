import { postFcmToken } from '@/libs/api/fcm-token-post-fetch';
import { messaging } from '@/libs/firebase';
import { getToken } from 'firebase/messaging';

const VAPID_KEY = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

/**
 * FCM 토큰 발급 성공 시 서버로 토큰 전송
 */
export const handleFcmToken = async () => {
  try {
    // 알림 권한 받기
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
      // todo: 알림 비허용 시 허용을 유도하는 팝업을 띄워주는 방법도 고려해 보면 좋을 것 같아요.
      return;
    }

    // 권한 허용 시 fcm 토큰 발급
    const fcmToken = await getToken(messaging, { vapidKey: VAPID_KEY });

    if (!fcmToken) {
      console.warn('FCM 토큰 발급에 실패했습니다.');

      return;
    }

    // 토큰 발급 성공 시 서버로 토큰 전송
    await postFcmToken(fcmToken);
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

export default handleFcmToken;
