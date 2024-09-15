'use client'; // 클라이언트 컴포넌트로 선언

import { usePathname } from 'next/navigation';
import Header from '@/components/common/header';

import * as styles from './layout.css';

const HeaderController = () => {
  const pathname = usePathname();

  // 특정 페이지에서 헤더 숨기기 (예: /onboarding 경로)
  const hideHeader = pathname === '/onboarding';

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
