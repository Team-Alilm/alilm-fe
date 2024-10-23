'use client';

import { type MouseEventHandler } from 'react';

import { type AlilmTab, useAlilmTabs } from './contexts/alilm-tabs-context';
import * as styles from './index.css';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';

const ALILM_TABS = [
  {
    name: 'home',
    text: '홈',
  },
  {
    name: 'myAlilm',
    text: '나의 알림',
  },
];

const AlilmTabs = () => {
  const [alilmTab, setAlilmTab] = useAlilmTabs();
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);

  const handleAlilmTabSelect: MouseEventHandler<HTMLButtonElement> = e => {
    const { name } = e.currentTarget;
    if (name === 'myAlilm' && !accessToken) {
      openLoginModal();
    } else {
      setAlilmTab(name as AlilmTab);
    }
  };

  return (
    <div className={styles.alilmTabs}>
      {ALILM_TABS.map(({ name, text }, index) => (
        <button
          key={index}
          className={styles.alilmTab({ isActive: alilmTab === name })}
          onClick={handleAlilmTabSelect}
          name={name}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default AlilmTabs;
