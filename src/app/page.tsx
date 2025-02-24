'use client';

import { Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Portal from '@/components/common/modal/modal-portal';
import Button from '@/components/design-system/button';
import Flex from '@/components/design-system/flex';
import Spacer from '@/components/design-system/spacer';
import AlilmInfo from '@/components/main/alilm-info';
import AlilmTabs from '@/components/main/alilm-tabs';
import { AlilmTabsProvider } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';
import OnboardingModal from '@/components/main/onboarding';
import ProductCard from '@/components/product/product-card';
import ProductCardList from '@/components/product/product-card-list';
import useBooleanState from '@/hooks/common/use-boolean-state';
import { useGetRestockResponse } from '@/hooks/queries/use-get-restock-items';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './page.css';

const MainPage = () => {
  const router = useRouter();
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const onBoardingModalState = useBooleanState();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);
  const { data: restockResponse } = useGetRestockResponse();

  useEffect(() => {
    const onboardingState = localStorage.getItem('showOnboarding');
    if (onboardingState !== 'completed') {
      onBoardingModalState.open();
    }
  }, [onBoardingModalState]);

  useEffect(() => {
    // 서비스 워커가 지원되는지 확인
    if ('serviceWorker' in navigator) {
      // 서비스 워커 등록
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(registration => {
          // 서비스 워커가 대기 중일 때 SKIP_WAITING 메시지 전송
          if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            console.log('서비스 워커 대기 상태를 건너뜁니다.');
          } else {
            console.log('서비스 워커가 활성화되었습니다.');
          }

          // 새 서비스 워커가 설치된 후, SKIP_WAITING 메시지 전송
          registration.onupdatefound = () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.onstatechange = () => {
                if (newWorker.state === 'installed') {
                  // 새 서비스 워커가 설치된 후 바로 활성화하려면 SKIP_WAITING 메시지 전송
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  console.log('새 서비스 워커가 설치되었습니다. 활성화합니다.');
                }
              };
            }
          };
        })
        .catch(error => {
          console.error('서비스 워커 등록 실패', error);
        });

      // 앱이 삭제될 때 서비스 워커를 삭제하는 방법
      const removeServiceWorkerOnAppUninstall = () => {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => {
            registration.unregister().then(success => {
              if (success) {
                console.log('서비스 워커가 성공적으로 삭제되었습니다.');
              } else {
                console.error('서비스 워커 삭제 실패');
              }
            });
          });
        });
      };

      // PWA가 삭제될 때 서비스 워커 삭제
      window.addEventListener('beforeunload', removeServiceWorkerOnAppUninstall);

      // 컴포넌트가 unmount될 때 이벤트 리스너 제거
      return () => {
        window.removeEventListener('beforeunload', removeServiceWorkerOnAppUninstall);
      };
    } else {
      console.warn('서비스 워커는 이 브라우저에서 지원되지 않습니다.');
    }
  }, []);

  const handleMoveCreatePage = () => {
    if (accessToken) {
      router.push('/create');
    } else {
      openLoginModal();
    }
  };

  return (
    <div className={styles.mainPage}>
      <Portal>
        {onBoardingModalState.isVisible ? (
          <OnboardingModal onClose={onBoardingModalState.close} />
        ) : null}
      </Portal>
      <Spacer height={40} />
      <Suspense fallback={<AlilmInfo />}>
        <AlilmInfo />
      </Suspense>
      <Spacer height={60} />

      <h3 className={styles.restock}>최근 재입고된 상품 TOP7</h3>

      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        style={{ paddingLeft: '2rem', paddingRight: '1rem', paddingBottom: '2rem' }}
      >
        {restockResponse?.productList.map(item => (
          <SwiperSlide key={item.productId} className={styles.cardWrapper}>
            <ProductCard
              {...item}
              key={item.productId}
              id={item.productId}
              alilm={undefined}
              thumbnailUrl={item.productThumbnailUrl}
              imageUrl={item.productThumbnailUrl}
              number={0}
              borderRadius={0}
              firstCategory=""
              firstOption=""
              name=""
              brand=""
              store=""
              price={0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Flex justify="center">
        <Button onClick={handleMoveCreatePage}>재입고 알림 신청하러가기</Button>
      </Flex>
      <Spacer height={60} />
      <Suspense fallback={<div>탭 정보 초기화 중...</div>}>
        <AlilmTabsProvider>
          <AlilmTabs />
          <Spacer height={28} />
          <ProductCardList />
        </AlilmTabsProvider>
      </Suspense>
      <Spacer height={80} />
    </div>
  );
};

export default MainPage;
