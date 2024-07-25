import { type PropsWithChildren, useState } from 'react';
import { createSafeContext } from '@/utils/create-safe-context';

export type AlilmTab = 'home' | 'myAlilm';
type AlilmTabs = [AlilmTab, (alilmTab: AlilmTab) => void];

export const [AlilmTabsContextProvider, useAlilmTabsContext] = createSafeContext<AlilmTabs>();

export const AlilmTabsProvider = ({ children }: PropsWithChildren) => {
  const [alilmTab, setAlilmTab] = useState<AlilmTab>('home');

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
