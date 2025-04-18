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
import ProductCardList from '@/components/product/product-card-list';
import ProductThumbnailImage from '@/components/product/product-thumbnail';
import useBooleanState from '@/hooks/common/use-boolean-state';
import { useGetOldResponse } from '@/hooks/queries/use-get-old-basket';
import { type RestockItem, useGetRestockResponse } from '@/hooks/queries/use-get-restock-items';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { Clock } from 'lucide-react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './page.css';

const MainPage = () => {
  const router = useRouter();
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const onBoardingModalState = useBooleanState();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);
  const { data: restockResponse } = useGetRestockResponse();
  const { data: oldResponse } = useGetOldResponse(accessToken ?? '');

  const givenTime = oldResponse?.oldProduct.createdDate ?? 0;
  const currentTimestamp = Date.now(); // 현재 타임스탬프 (밀리초 기준)

  const elapsedMilliseconds = currentTimestamp - givenTime; // 경과 시간 (밀리초)

  // 경과 시간을 초 단위로 변환
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60); // 경과 시간(분)
  const elapsedHours = Math.floor(elapsedMinutes / 60); // 경과 시간(시간)
  const elapsedDays = Math.floor(elapsedHours / 24); // 경과 시간(일)

  const timePassed = [
    elapsedDays ? `${elapsedDays}일` : '',
    elapsedHours % 24 ? `${elapsedHours % 24}시간` : '',
    elapsedMinutes % 60 ? `${elapsedMinutes % 60}분` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const related = oldResponse?.relatedProductList;
  useEffect(() => {
    const onboardingState = localStorage.getItem('showOnboarding');
    if (onboardingState !== 'completed') {
      onBoardingModalState.open();
    }
  }, [onBoardingModalState]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(registration => {
          registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
        })
        .catch(error => {
          console.error('Service Worker Registration Failed', error);
        });
    }
  }, []);

  const handleMoveCreatePage = () => {
    if (accessToken) {
      router.push('/create');
    } else {
      openLoginModal();
    }
  };

  const handleProductClick = (item: RestockItem) => {
    router.push(`/product/${item.productId}`);
  };

  return (
    <div>
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
      <div className={styles.firstModule}>
        <h3 className={styles.restock}>최근 재입고된 상품 TOP 7</h3>

        <Swiper
          slidesPerView="auto"
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          style={{ padding: '0 0 2rem 2rem' }}
        >
          {restockResponse?.productList.map((item, index) => (
            <SwiperSlide key={item.productId} className={styles.cardWrapper}>
              <button style={{ all: 'unset' }} onClick={() => handleProductClick(item)}>
                <div className={styles.topBadge}>{`TOP ${index + 1}`}</div>
                <ProductThumbnailImage card="slide" imageUrl={item.productThumbnailUrl} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Flex justify="center">
        <Button onClick={handleMoveCreatePage}>재입고 알림 신청하러가기</Button>
      </Flex>

      <Spacer height={30} />

      {accessToken && (
        <>
          <h3 className={styles.late1}>재입고 늦어지는 상품</h3>
          <h5 className={styles.late2}>비슷한 가격대 추천 상품을 살펴보세요</h5>
          <Swiper
            mousewheel={true}
            slidesPerView="auto"
            modules={[Pagination, Mousewheel]}
            style={{ padding: '0 0 2rem 2rem' }}
          >
            <div>
              <SwiperSlide className={styles.cardWrapper}>
                <div className={styles.topBadge1}>My상품</div>

                {oldResponse?.oldProduct && (
                  <button
                    style={{ position: 'relative', all: 'unset' }}
                    onClick={() => router.push(`/product/${oldResponse.oldProduct.productId}`)}
                  >
                    <ProductThumbnailImage
                      card="slide"
                      imageUrl={oldResponse.oldProduct.thumbnailUrl ?? ''}
                    />
                  </button>
                )}
                <div className={styles.iconWrapper}>
                  <Clock size={13} />
                  기다린 시간:
                  {timePassed}
                </div>
                <p className={styles.name}> {oldResponse?.oldProduct?.brand} </p>
                <p className={styles.options}>
                  {oldResponse?.oldProduct?.category} |{' '}
                  {oldResponse?.oldProduct?.price?.toLocaleString()}원
                </p>
              </SwiperSlide>
              {related?.map(item => (
                <SwiperSlide key={item.productId} className={styles.cardWrapper}>
                  <div style={{ display: 'column' }}>
                    <div className={styles.topBadge2}>추천상품</div>

                    <button
                      style={{ position: 'relative', all: 'unset' }}
                      onClick={() => router.push(`/product/${item.productId}`)}
                    >
                      <ProductThumbnailImage card="slide" imageUrl={item.thumbnailUrl!} />
                    </button>

                    <p className={styles.name}>{item.brand}</p>
                    <p className={styles.options}>
                      {item.category} | {item.price.toLocaleString()}원
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      )}

      <Spacer height={50} />
      <div className={styles.mainPage}>
        <Suspense fallback={<div>탭 정보 초기화 중...</div>}>
          <AlilmTabsProvider>
            <AlilmTabs />
            <Spacer height={28} />
            <ProductCardList />
          </AlilmTabsProvider>
        </Suspense>
        <Spacer height={80} />
      </div>
    </div>
  );
};

export default MainPage;
