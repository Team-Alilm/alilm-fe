import { type PropsWithChildren } from 'react';

import * as styles from './layout.css';

import '@/styles/global.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body>
        <div className={styles.layout}>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
