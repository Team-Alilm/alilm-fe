'use client';

import { type PropsWithChildren } from 'react';
import Alert from '@/components/common/alert';
import { useModalStore } from '@/store/use-modal-store';

const AlertProvider = ({ children }: PropsWithChildren) => {
  const { modalType, title, description, mainBtnText, onClick } = useModalStore();

  return (
    <>
      {children}
      <Alert
        type={modalType}
        title={title}
        description={description}
        mainBtnText={mainBtnText}
        onClick={onClick}
      />
    </>
  );
};

export default AlertProvider;
