'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/common/header';
import { setupInterceptors } from '@/libs/api/client';
import { useLoginModalStore } from '@/store/use-login-modal-store';

import * as styles from './layout.css';

const HeaderController = () => {
  const pathname = usePathname();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);

  // 특정 페이지에서 헤더 숨기기 (예: /onboarding 경로)
  const hideHeader = pathname === '/onboarding';

  useEffect(() => {
    setupInterceptors(openLoginModal);
  }, [openLoginModal]);

  return (
    <>
      {!hideHeader && (
        <div className={styles.header}>
          <Header />
        </div>
      )}
    </>
  );
};

export default HeaderController;
