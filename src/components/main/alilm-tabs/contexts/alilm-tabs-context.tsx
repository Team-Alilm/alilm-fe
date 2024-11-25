'use client';

import { type PropsWithChildren, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSafeContext } from '@/utils/create-safe-context';

export type AlilmTab = 'home' | 'myAlilm';
type AlilmTabs = [AlilmTab, (alilmTab: AlilmTab) => void];

export const [AlilmTabsContextProvider, useAlilmTabsContext] = createSafeContext<AlilmTabs>();

export const AlilmTabsProvider = ({ children }: PropsWithChildren) => {
  const [alilmTab, setAlilmTab] = useState<AlilmTab>('home');
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL에서 초기값 설정
  useEffect(() => {
    const tabFromUrl = searchParams.get('tab') as AlilmTab;
    if (tabFromUrl && ['home', 'myAlilm'].includes(tabFromUrl)) {
      setAlilmTab(tabFromUrl);
    }
  }, [searchParams]);

  // 컨텍스트 상태 변경 시 URL 업데이트
  useEffect(() => {
    router.replace(`/?tab=${alilmTab}`);
  }, [alilmTab, router]);

  return (
    <AlilmTabsContextProvider value={[alilmTab, setAlilmTab]}>{children}</AlilmTabsContextProvider>
  );
};

export const useAlilmTabs = () => {
  return useAlilmTabsContext();
};

export const useAlilmTabsValue = () => {
  return useAlilmTabs()[0];
};

export const useSetAlilmTabsValue = () => {
  return useAlilmTabs()[1];
};
