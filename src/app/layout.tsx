import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import Head from 'next/head';
import { Pretendard } from '@/styles/local-fonts';

import AlertProvider from './alert-provider';
import FromProvider from './from-provider';
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
      <Head>
        <meta property="og:title" content="Alilm" />
        <meta property="og:description" content="Alilm is a great service" />
        <meta property="og:image" content="/icons/alilm.ico" />
        <meta property="og:url" content="https://www.alilm.co.kr/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="Alilm, service, 알림" />
        <link rel="icon" href="/icons/alilm.ico" />
        <title>Alilm</title>
      </Head>
      <body>
        <Providers>
          <FromProvider>
            <AlertProvider>
              <div className={styles.layout}>
                <HeaderController />
                <div className={styles.mainContent}>{children}</div>
                <div id="modal-root" style={{ width: 'inherit' }} />
              </div>
            </AlertProvider>
          </FromProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
