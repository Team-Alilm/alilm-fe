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
import useBooleanState from '@/hooks/common/use-boolean-state';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';

import * as styles from './page.css';

const MainPage = () => {
  const router = useRouter();
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const onBoardingModalState = useBooleanState();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);
  useEffect(() => {
    const onboardingState = localStorage.getItem('showOnboarding');
    if (onboardingState !== 'completed') {
      onBoardingModalState.open();
    }
  }, [onBoardingModalState]);

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
      <Flex justify="center">
        <Button onClick={handleMoveCreatePage}>재입고 알림 신청하러가기</Button>
      </Flex>
      <Spacer height={60} />
      <AlilmTabsProvider>
        <AlilmTabs />
        <Spacer height={28} />
        <ProductCardList />
      </AlilmTabsProvider>
      <Spacer height={80} />
    </div>
  );
};

export default MainPage;
