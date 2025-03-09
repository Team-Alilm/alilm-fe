'use client';

import { type PropsWithChildren, useEffect } from 'react';

const FromProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    console.log('NEXT_PUBLIC_INAPP_REDIRECT_URL:', process.env.NEXT_PUBLIC_INAPP_REDIRECT_URL);
  }, []);

  useEffect(() => {
    const useragent = navigator.userAgent.toLowerCase();
    const targetUrl = process.env.NEXT_PUBLIC_INAPP_REDIRECT_URL;
    if (useragent.match(/kakaotalk/i) && targetUrl) {
      location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(targetUrl);
    }
  }, []);

  return <div>{children}</div>;
};

export default FromProvider;
