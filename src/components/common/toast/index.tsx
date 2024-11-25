'use client';

import { useToastStore } from '@/store/use-toast-store';
import * as Toast from '@radix-ui/react-toast';

import * as styles from './index.css';

export const ToastNotification: React.FC = () => {
  const { toast, hideToast } = useToastStore();

  if (!toast) return;

  return (
    <Toast.Provider swipeDirection="up">
      <Toast.Root
        className={styles.toastContainer}
        open={toast?.open}
        onOpenChange={open => {
          if (!open) hideToast();
        }}
        duration={3000}
      >
        <Toast.Description>{toast.message}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className={styles.toastViewPort} />
    </Toast.Provider>
  );
};
