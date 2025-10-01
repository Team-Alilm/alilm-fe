'use client';

import { useEffect } from 'react';
import Portal from '@/components/common/modal/modal-portal';
import Spacer from '@/components/design-system/spacer';
import MainBanner from '@/components/main/main-banner';
import OnboardingModal from '@/components/main/onboarding';
import ProductListSection from '@/components/main/product-list-section';
import RecentRestockSection from '@/components/main/recent-restock-section';
import CategorySwiper from '@/components/product/category-swiper';
import { chunkArray, PRODUCTS_CATEGORIES } from '@/components/product/product-card-list';
import useBooleanState from '@/hooks/common/use-boolean-state';
import { useForm } from 'react-hook-form';

const MainPage = () => {
  const onBoardingModalState = useBooleanState();

  const { control } = useForm({ defaultValues: { category: '' } });
  const categoryChunks = chunkArray(PRODUCTS_CATEGORIES, 10);
  const categoryPairs = chunkArray(PRODUCTS_CATEGORIES, 2);

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

  return (
    <div>
      <Portal>
        {onBoardingModalState.isVisible ? (
          <OnboardingModal onClose={onBoardingModalState.close} />
        ) : null}
      </Portal>

      <MainBanner />

      <CategorySwiper
        control={control}
        categoryPairs={categoryPairs}
        categoryChunks={categoryChunks}
      />

      <RecentRestockSection />

      <ProductListSection />

      <Spacer height={20} />

      <Spacer height={80} />
    </div>
  );
};

export default MainPage;
