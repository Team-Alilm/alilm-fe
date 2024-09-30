'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Portal from '@/components/common/modal/ModalPortal';
import Button from '@/components/design-system/button';
import Flex from '@/components/design-system/flex';
import Spacer from '@/components/design-system/spacer';
import AlilmInfo from '@/components/main/alilm-info';
import AlilmTabs from '@/components/main/alilm-tabs';
import { AlilmTabsProvider } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';
import OnboardingModal from '@/components/main/onboarding';
import ProductCardList from '@/components/product/product-card-list';

import * as styles from './page.css';

const MainPage = () => {
  const [showOnboarding, setShowOnboarding] = useState(false); // 온보딩 표시 여부 관리
  const router = useRouter();

  useEffect(() => {
    const firstVisit = localStorage.getItem('showOnboarding');
    if (!firstVisit) {
      setShowOnboarding(true);
    }
  }, []);

  const handleMoveCreatePage = () => {
    router.push('/create');
  };

  return (
    <div className={styles.mainPage}>
      <Portal>
        {showOnboarding ? <OnboardingModal onClose={() => setShowOnboarding(false)} /> : null}
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
