import { type PropsWithChildren } from 'react';

import '@/styles/globalStyle.css';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
