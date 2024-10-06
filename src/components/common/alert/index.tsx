import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as styles from './index.css';

export interface AlertProps {
  type: 'alert' | 'confirm';
  title: string;
  description?: string;
  /**
   * alert일 경우 cancelBtnText만 지정
   */
  cancelBtnText: string;
  confirmBtnText?: string;
  onClick?: () => void;
  isOpen: boolean;
}

/**
 *  얼럿, 확인창 컴포넌트
 *
 */
const Alert = ({
  type,
  title,
  description,
  cancelBtnText,
  confirmBtnText,
  onClick,
  isOpen,
}: AlertProps) => (
  <AlertDialog.Root open={isOpen}>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className={styles.overlay} />
      <AlertDialog.Content className={styles.content}>
        <AlertDialog.Title className={styles.title}>{title}</AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          {description}
        </AlertDialog.Description>

        <div className={styles.btnContainer}>
          <AlertDialog.Cancel asChild>
            <button className={styles.cancelBtn}>{cancelBtnText}</button>
          </AlertDialog.Cancel>
          {type === 'confirm' && (
            <AlertDialog.Action asChild onClick={onClick}>
              <button className={styles.confirmBtn}>{confirmBtnText}</button>
            </AlertDialog.Action>
          )}
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Alert;
