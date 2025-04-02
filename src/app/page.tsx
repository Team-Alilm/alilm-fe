'use client';

import { Suspense, useEffect } from 'react';
import Image from 'next/image';
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
  const { data: oldResponse } = useGetOldResponse();

  const givenTime = oldResponse?.oldProduct.createdDate ?? 0;
  const currentTimestamp = Date.now(); // 현재 타임스탬프 (밀리초 기준)

  const elapsedMilliseconds = currentTimestamp - givenTime; // 경과 시간 (밀리초)

  // 경과 시간을 초 단위로 변환
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60); // 경과 시간(분)
  const elapsedHours = Math.floor(elapsedMinutes / 60); // 경과 시간(시간)
  const elapsedDays = Math.floor(elapsedHours / 24); // 경과 시간(일)

  // DD:HH:MM 형식으로 출력
  const timePassed = `${elapsedDays}:
  ${String(elapsedHours % 24).padStart(2, '0')}:
  ${String(elapsedMinutes % 60).padStart(2, '0')}`;

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
        <h3 className={styles.restock}>최근 재입고된 상품 TOP7</h3>

        <Swiper
          slidesPerView="auto"
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          style={{ padding: '0 0 2rem 2rem' }}
        >
          {restockResponse?.productList.map((item, index) => (
            <SwiperSlide key={item.productId} className={styles.cardWrapper}>
              <button
                style={{ position: 'relative', all: 'unset' }}
                onClick={() => handleProductClick(item)}
              >
                <div className={styles.topBadge}>{`TOP ${index + 1}`}</div>
                <ProductThumbnailImage card="thin" imageUrl={item.productThumbnailUrl} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.mainPage}>
        <Flex justify="center">
          <Button onClick={handleMoveCreatePage}>재입고 알림 신청하러가기</Button>
        </Flex>

        <Spacer height={30} />

        <h3 className={styles.late1}>재입고 늦어지는 상품</h3>
        <h5 className={styles.late2}>비슷한 가격대 추천 상품을 살펴보세요</h5>

        <Swiper
          slidesPerView={2}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          spaceBetween={10}
        >
          <div className={styles.slideLayout}>
            <SwiperSlide style={{ width: '30%' }}>
              <div className={styles.leftImage}>
                <ProductCard
                  key={undefined}
                  id={1}
                  alilm={undefined}
                  thumbnailUrl={oldResponse?.oldProduct.thumbnailUrl ?? ''}
                  imageUrl={oldResponse?.oldProduct.thumbnailUrl ?? ''}
                  number={0}
                  borderRadius={3}
                  firstCategory=""
                  firstOption=""
                  name=""
                  brand=""
                  store=""
                  price={0}
                />
                <div className={styles.iconWrapper}>
                  <Clock size={13} />
                  재입고 등록한지 {timePassed} 경과
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ width: '70%' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                }}
              >
                {related?.map((item, idx) => (
                  <Image
                    key={item.thumbnailUrl ?? idx}
                    src={item.thumbnailUrl ?? ''}
                    width={180}
                    height={105}
                    style={{
                      borderRadius: '0.8rem',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      width: '100%',
                    }}
                    alt=""
                  />
                ))}
              </div>
            </SwiperSlide>
            {/* <div className={styles.rightGrid}>
              {related?.map((item,idx) => (
              <SwiperSlide key={idx} style={{width:'auto'}}>
                <Image
                  key={item.thumbnailUrl} // 여기 key 추가
                  src={item.thumbnailUrl ?? ''}
                  width={240}
                  height={105}
                  priority
                  style={{
                    borderRadius: '0.8rem',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                  alt=""
                />
                </SwiperSlide>
              ))}
              
            </div> */}
          </div>
        </Swiper>

        <Spacer height={50} />

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
