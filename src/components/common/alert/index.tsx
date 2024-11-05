'use client';

import { useEffect } from 'react';
import { useModalStore } from '@/store/use-modal-store';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as styles from './index.css';

export interface AlertProps {
  type: 'alert' | 'confirm';
  title: string;
  description?: string;
  cancelBtnText?: string;
  mainBtnText?: string;
  onClick?: () => void;
  isOpen?: boolean;
}

const Alert = ({ type, title, description, cancelBtnText, mainBtnText, onClick }: AlertProps) => {
  const onClose = useModalStore(state => state.onClose);
  const isOpen = useModalStore(state => state.isOpen);

  // 엔터 이벤트 발생 시 얼럿 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && isOpen) {
        event.preventDefault();
        onClose();
        if (onClick) {
          onClick();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClick, onClose]);

  return (
    <AlertDialog.Root
      open={isOpen}
      onOpenChange={open => {
        if (!open) {
          onClose();
        }
      }}
    >
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>{title}</AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            {description}
          </AlertDialog.Description>

          <div className={styles.btnContainer}>
            {type === 'confirm' && (
              <AlertDialog.Cancel asChild>
                <button className={styles.cancelBtn}>{cancelBtnText || '취소'}</button>
              </AlertDialog.Cancel>
            )}

            <AlertDialog.Action asChild>
              <button className={styles.mainBtnText} onClick={onClick ? onClick : onClose}>
                {mainBtnText || '확인'}
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Alert;
