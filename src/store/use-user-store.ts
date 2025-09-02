import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserInfo {
  nickname: string;
  email: string;
}

export interface UserStoreState extends UserInfo {
  accessToken: string;
}

export interface UserStoreAction {
  setUserInfo: (state: UserInfo) => void;
  setAccessToken: (token: string) => void;
  removeUserInfo: () => void;
}

export const useUserStore = create<UserStoreState & UserStoreAction>()(
  persist(
    set => ({
      nickname: '',
      email: '',
      accessToken: '',

      setUserInfo: info =>
        set(state => ({
          ...state,
          ...info,
        })),

      setAccessToken: token =>
        set(state => ({
          ...state,
          accessToken: token,
        })),

      removeUserInfo: () =>
        set(() => ({
          nickname: '',
          email: '',
          accessToken: '',
        })),
    }),
    {
      name: 'auth',
    }
  )
);
