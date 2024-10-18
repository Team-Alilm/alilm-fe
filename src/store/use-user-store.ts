import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserInfo {
  nickname: string;
  email: string;
}
export interface UserStoreState extends UserInfo {}

export interface UserStoreAction {
  setUserInfo: (state: UserInfo) => void;
  removeUserInfo: () => void;
}

export const useUserStore = create<UserStoreState & UserStoreAction>()(
  persist(
    set => ({
      nickname: '',
      email: '',

      setUserInfo: state =>
        set({
          ...state,
        }),

      removeUserInfo: () =>
        set(() => ({
          nickname: '',
          email: '',
        })),
    }),
    {
      name: 'auth',
    }
  )
);
