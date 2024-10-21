import { create } from 'zustand';

export interface ModalProps {
  modalType: 'alert' | 'confirm';
  title: string;
  description?: string;
  mainBtnText?: string;
  onClick?: () => void;
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
  mainBtnText: '',
  onClick: undefined,

  onOpen: ({ modalType, title, description, mainBtnText, onClick }: ModalProps) =>
    set({
      isOpen: true,
      modalType: modalType,
      title: title,
      description: description,
      mainBtnText: mainBtnText,
      onClick: onClick,
    }),

  onClose: () =>
    set({
      isOpen: false,
      modalType: 'alert',
      title: '',
      description: '',
      mainBtnText: '',
      onClick: undefined,
    }),
}));
