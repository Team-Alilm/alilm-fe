import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import { ToastNotification } from '@/components/common/toast';
import { Pretendard } from '@/styles/local-fonts';

import AlertProvider from './alert-provider';
import FromProvider from './from-provider';
import HeaderController from './header-controller';
import * as styles from './layout.css';
import Providers from './providers';

import '@radix-ui/themes/styles.css';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Alilm',
  description: 'Alilm',
  keywords: 'Alilm',
  openGraph: {
    title: 'Alilm',
    description: '재입고 알림을 받아보세요!',
    images: [
      {
        url: 'https://www.alilm.co.kr/images/alilm-thumbnail.webp',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://www.alilm.co.kr/',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/icons/alilm.ico',
  },
  manifest: '/manifest.json',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko" className={Pretendard.className}>
      <body>
        <Providers>
          <FromProvider>
            <AlertProvider>
              <div className={styles.layout}>
                <HeaderController />
                <div className={styles.mainContent}>{children}</div>
                <div id="modal-root" style={{ width: 'inherit' }} />
                <ToastNotification />
              </div>
            </AlertProvider>
          </FromProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
