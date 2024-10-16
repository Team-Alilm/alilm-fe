import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as styles from './index.css';

const Alert = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="Button violet">Delete account</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className={styles.overlay} />
      <AlertDialog.Content className={styles.content}>
        <AlertDialog.Title className={styles.title}>
          이 화면을 나가면 작성중인 게시물이 삭제돼요!
        </AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          그래도 나가시겠어요?
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className={styles.button}>취소</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className={styles.button}>확인</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Alert;
