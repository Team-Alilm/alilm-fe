import { create } from 'zustand';

interface LoginModalStoreState {
  isLoginModalOpen: boolean;
}

interface LoginModalStoreActions {
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

export const useLoginModalStore = create<LoginModalStoreState & LoginModalStoreActions>()(set => ({
  isLoginModalOpen: false,

  openLoginModal: () => set({ isLoginModalOpen: true }),

  closeLoginModal: () => set({ isLoginModalOpen: false }),
}));
