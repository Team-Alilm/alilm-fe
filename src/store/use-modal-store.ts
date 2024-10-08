import { create } from 'zustand';

export interface ModalProps {
  modalType: 'alert' | 'confirm';
  title: string;
  description?: string;
}

export interface ModalStoreState extends ModalProps {
  isOpen: boolean;
}

export interface ModalStoreAction {
  onOpen: ({ modalType, title, description }: ModalProps) => void;
  onClose: () => void;
}

export const useModalStore = create<ModalStoreState & ModalStoreAction>()(set => ({
  isOpen: false,
  modalType: 'alert',
  title: '',
  description: '',

  onOpen: ({ modalType, title, description }: ModalProps) =>
    set({
      isOpen: true,
      modalType: modalType,
      title: title,
      description: description,
    }),

  onClose: () =>
    set({
      isOpen: false,
      modalType: 'alert',
      title: '',
      description: '',
    }),
}));
