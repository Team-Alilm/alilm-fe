import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import Header from '@/components/common/header';

import * as styles from './layout.css';
import Providers from './providers';

import '@/styles/global.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body>
        <Providers>
          <div className={styles.layout}>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: 'Alilm',
  description: 'Alilm',
  keywords: 'Alilm',
  icons: {
    icon: '/icons/alilm.ico',
  },
};
