import { create } from 'zustand';

type ToastType = 'info' | 'error' | 'success';

interface Toast {
  message: string;
  type?: ToastType;
  open: boolean;
}

interface ToastState {
  toast: Toast | null;
  showToast: (message: string, type?: ToastType) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>(set => ({
  toast: null,
  showToast: (message, type = 'info') => set({ toast: { message, type, open: true } }),
  hideToast: () => set(state => ({ toast: state.toast ? { ...state.toast, open: false } : null })),
}));
