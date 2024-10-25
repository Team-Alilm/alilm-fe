'use client';

import { useEffect, useRef } from 'react';
import { FanfareAnimation } from '@/components/animation/fanfare-animation';
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

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (svgRef.current) {
          FanfareAnimation(svgRef);
        }
      }, 0); // 지연 시간 설정 (0은 다음 이벤트 루프에서 실행)

      return () => clearTimeout(timer); // 클린업 함수
    }
  }, [isOpen]);

  useEffect(() => {
    const removeSvg = () => {
      if (svgRef.current) {
        svgRef.current.style.display = 'none'; // 애니메이션이 끝난 후 숨기기
      }
    };

    if (isOpen) {
      setTimeout(removeSvg, 2000); // 5초 후 SVG 요소 숨기기 (애니메이션 시간이 끝난 후)
    }
  }, [isOpen]);

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
        <svg
          ref={svgRef}
          viewBox="-225 -225 450 450"
          role="presentation"
          style={{ position: 'absolute', width: '100%', height: '100%', top: '0', zIndex: '2' }}
        />
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
