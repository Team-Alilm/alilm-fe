import React, { type ReactNode, useEffect } from 'react';

import { background, modal } from './index.css';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  useEffect(() => {
    // 모달이 열렸을 때 스크롤 막기
    document.body.style.overflow = 'hidden';

    // 모달이 닫힐 때 스크롤 다시 활성화
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={background}>
      <div className={modal}>{children}</div>
    </div>
  );
};

export default Modal;
