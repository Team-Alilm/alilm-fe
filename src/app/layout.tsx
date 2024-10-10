import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { Pretendard } from '@/styles/local-fonts';
import { Theme } from '@radix-ui/themes';

import Client from './client';
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
              <HeaderController />
              <Client>{children}</Client>
            </div>
          </Theme>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
