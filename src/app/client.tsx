'use client';

import { type PropsWithChildren } from 'react';
import Alert from '@/components/common/alert';
import { useModalStore } from '@/store/use-modal-store';

import * as styles from './layout.css';

const Client = ({ children }: PropsWithChildren) => {
  const { modalType, title, description } = useModalStore();

  return (
    <>
      <Alert type={modalType} title={title} description={description} />
      <div className={styles.mainContent}>{children}</div>
      <div id="modal-root" style={{ width: 'inherit' }} />
    </>
  );
};

export default Client;
