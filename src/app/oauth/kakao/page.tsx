'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { postFcmToken } from '@/libs/api/fcm-token-post-fetch';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useModalStore } from '@/store/use-modal-store';
import { useUserStore } from '@/store/use-user-store';

const OauthKakaoPage = () => {
  const router = useRouter();
  const [redirect, setRedirect] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const onOpen = useModalStore(state => state.onOpen);

  const setAccessToken = useUserStore(state => state.setAccessToken);

  useEffect(() => {
    const handleOauth = async () => {
      if (typeof window === 'undefined') {
        return;
      }

      const queryParams = new URLSearchParams(window.location.search);
      const accessToken = queryParams.get('Authorization');

      // redirect 쿼리 처리
      const redirectParam = queryParams.get('redirect') as string;
      setRedirect(redirectParam || null);

      const handleLogin = () => {
        if (redirect) {
          router.replace(redirect);
        } else {
          router.replace('/');
        }
      };

      if (accessToken) {
        try {
          Storage.setItem(LOCAL_STORAGE_KEY.accessToken, accessToken);
          setAccessToken(accessToken);

          let fcmToken = localStorage.getItem('fcm-token');

          if (!fcmToken) {
            // FCM 토큰이 없으면 다시 요청
            const { isSupported } = await import('firebase/messaging');
            const isMessagingSupported = await isSupported();

            if (isMessagingSupported) {
              try {
                const { default: handleFcmToken } = await import('@/utils/handle-fcm-token');
                await handleFcmToken();
                fcmToken = localStorage.getItem('fcm-token');
              } catch (error) {
                console.error('FCM 토큰 발급 실패:', error);
              }
            }
          }

          // FCM 토큰이 있을 때만 서버로 전송
          if (fcmToken) {
            try {
              await postFcmToken(fcmToken);
            } catch (error) {
              console.error('FCM 토큰 저장 중 에러 발생:', error);
            }
          }

          await handleLogin();
        } catch (error) {
          console.error('OAuth 과정에서 에러 발생:', error);
          onOpen({
            modalType: 'alert',
            title: '로그인 과정에서 에러가 발생했습니다. 다시 시도해주세요.',
          });
          router.replace('/');
        }
      } else {
        console.error('액세스 토큰 가져오기 실패');
        onOpen({
          modalType: 'alert',
          title: '액세스 토큰을 가져오지 못했습니다. 다시 로그인 해주세요.',
        });
        router.replace('/');
      }

      setIsLoading(false);
    };
    handleOauth();
  }, [router]);

  if (isLoading) {
    return (
      <div>
        <p>로그인 진행 중입니다.</p>
        <span>아무 응답이 없는 경우 다시 로그인 시도해주세요.</span>
      </div>
    );
  }

  return null;
};

export default OauthKakaoPage;
