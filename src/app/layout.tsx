import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';

import HeaderController from './header-controller'; // 클라이언트 컴포넌트
import * as styles from './layout.css';
import Providers from './providers';

import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Alilm',
  description: 'Alilm',
  keywords: 'Alilm',
  icons: {
    icon: '/icons/alilm.ico',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body>
        <Providers>
          <div className={styles.layout}>
            <HeaderController /> {/* 헤더 조절 로직을 담당하는 클라이언트 컴포넌트 */}
            <div className={styles.mainContent}>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
