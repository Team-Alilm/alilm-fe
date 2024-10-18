'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useModalStore } from '@/store/use-modal-store';

const OauthKakaoPage = () => {
  const router = useRouter();
  const redirect = Router.query.redirect as string;
  const [isLoading, setIsLoading] = useState(true);
  const onOpen = useModalStore(state => state.onOpen);

  useEffect(() => {
    const handleOauth = async () => {
      if (typeof window === 'undefined') {
        return;
      }

      const queryParams = new URLSearchParams(window.location.search);
      const accessToken = queryParams.get('Authorization');

      const handleLogin = () => {
        // 로그인 로직
        if (redirect) {
          router.replace(redirect);
        } else {
          router.replace('/');
        }
      };

      if (accessToken) {
        try {
          Storage.setItem(LOCAL_STORAGE_KEY.accessToken, accessToken);

          try {
            const { isSupported } = await import('firebase/messaging');
            const isMessagingSupported = await isSupported();

            // 브라우저 환경 체크
            const userAgent = window.navigator.userAgent.toLowerCase();
            const isIPhone = /iphone|ipad|ipod/.test(userAgent);
            const isInAppBrowser = /kakaotalk|instagram|naver|line/.test(userAgent);

            // FCM이 지원되는 브라우저인 경우
            if (isMessagingSupported && !isIPhone && !isInAppBrowser) {
              const { default: handleFcmToken } = await import('@/utils/handle-fcm-token');
              await handleFcmToken();
              handleLogin();
            } else if (isIPhone || isInAppBrowser) {
              alert(
                '알림 기능을 활용하시려면, Safari 또는 Chrome 브라우저에서 이 페이지를 열어주세요.'
              );
              router.replace('/');
            } else {
              // FCM이 지원되지 않지만 허용된 브라우저인 경우
              // console.log('이 브라우저는 FCM을 지원하지 않습니다.');
              router.replace('/');
            }
          } catch (error) {
            console.error('FCM 관련 처리 중 오류 발생:', error);
            router.replace('/');
          }
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
