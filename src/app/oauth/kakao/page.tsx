'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';

const OauthKakaoPage = () => {
  const router = useRouter();
  const queryParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    const accessToken = queryParams.get('Authorization');

    if (accessToken) {
      Storage.setItem(LOCAL_STORAGE_KEY.accessToken, accessToken);
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default OauthKakaoPage;
