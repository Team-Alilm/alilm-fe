import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import { Pretendard } from '@/styles/local-fonts';

import HeaderController from './header-controller'; // 클라이언트 컴포넌트
import * as styles from './layout.css';
import Providers from './providers';

import '@radix-ui/themes/styles.css';
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
    <html lang="ko" className={Pretendard.className}>
      <body>
        <Providers>
          <Theme>
            <div className={styles.layout}>
              <HeaderController /> {/* 헤더 조절 로직을 담당하는 클라이언트 컴포넌트 */}
              <div className={styles.mainContent}>{children}</div>
              <div id="modal-root" style={{ width: 'inherit' }} />
            </div>
          </Theme>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
