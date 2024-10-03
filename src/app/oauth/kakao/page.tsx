'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import handleFcmToken from '@/utils/handle-fcm-token';

const OauthKakaoPage = () => {
  const router = useRouter();
  const queryParams = new URLSearchParams(window.location.search);
  const accessToken = queryParams.get('Authorization');
  console.log('accessToken>>', accessToken);

  useEffect(() => {
    if (accessToken) {
      Storage.setItem(LOCAL_STORAGE_KEY.accessToken, accessToken);
      router.replace('/');
      handleFcmToken();
    } else {
      alert('Failed to get access token');
      console.error('Failed to get access token');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return null;
};

export default OauthKakaoPage;
