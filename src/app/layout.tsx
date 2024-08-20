import { type PropsWithChildren } from 'react';
import Header from '@/components/common/header';

import * as styles from './layout.css';

import '@/styles/global.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body>
        <div className={styles.layout}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
