'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import handleFcmToken from '@/utils/handle-fcm-token';

const OauthKakaoPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 클라이언트 환경에서만 실행되도록 window 객체가 있는지 확인
    if (typeof window !== 'undefined') {
      const queryParams = new URLSearchParams(window.location.search);
      const accessToken = queryParams.get('Authorization');

      if (accessToken) {
        Storage.setItem(LOCAL_STORAGE_KEY.accessToken, accessToken);
        router.replace('/');
        handleFcmToken();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default OauthKakaoPage;
