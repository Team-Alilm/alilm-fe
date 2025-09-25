'use client';

import { Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Portal from '@/components/common/modal/modal-portal';
import Spacer from '@/components/design-system/spacer';
import { AlilmTabsProvider } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';
import MainBanner from '@/components/main/main-banner';
import OnboardingModal from '@/components/main/onboarding';
import ProductCardList from '@/components/product/product-card-list';
import ProductThumbnailImage from '@/components/product/product-thumbnail';
import useBooleanState from '@/hooks/common/use-boolean-state';
import { type RestockItem, useGetRestockResponse } from '@/hooks/queries/use-get-restock-items';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './page.css';

const MainPage = () => {
  const router = useRouter();
  const onBoardingModalState = useBooleanState();
  const { data: restockResponse } = useGetRestockResponse();

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

      <MainBanner />

      <div>
        <Suspense fallback={<div>탭 정보 초기화 중...</div>}>
          <AlilmTabsProvider>
            <ProductCardList />
          </AlilmTabsProvider>
        </Suspense>
      </div>

      <Spacer height={50} />

      <div className={styles.firstModule}>
        {restockResponse?.recentlyRestockedProductResponseList && (
          <h3 className={styles.restock}>최근 재입고된 상품</h3>
        )}

        <Swiper
          slidesPerView="auto"
          mousewheel={true}
          modules={[Pagination, Mousewheel, Autoplay]}
          style={{ padding: '0 0 2rem 2rem' }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {restockResponse?.recentlyRestockedProductResponseList?.map((item, index) => (
            <SwiperSlide key={item.productId} className={styles.cardWrapper}>
              <button style={{ all: 'unset' }} onClick={() => handleProductClick(item)}>
                <div className={styles.topBadge}>{index + 1}</div>
                <ProductThumbnailImage card="slide" thumbnailUrl={item.thumbnailUrl} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Spacer height={80} />
    </div>
  );
};

export default MainPage;
