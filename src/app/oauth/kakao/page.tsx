'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';

const AauthKakaoPage = () => {
  const router = useRouter();

  useEffect(() => {
    // URLSearchParams를 사용하여 클라이언트 사이드에서 검색 파라미터를 읽어옵니다.
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('Authorization');

    if (accessToken) {
      Storage.setItem(LOCAL_STORAGE_KEY.accessToken, accessToken);
      router.replace('/');
    }
  }, [router]);

  return (
    <div>
      <h1>Kakao 로그인 중</h1>
    </div>
  );
};

export default AauthKakaoPage;
