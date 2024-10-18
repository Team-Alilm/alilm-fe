'use client';

import { useRouter } from 'next/navigation';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useModalStore } from '@/store/use-modal-store';
import { useUserStore } from '@/store/use-user-store';

import { emailText, logoutBtn, nameText, profile } from './index.css';

interface ProfileProps {
  userName?: string;
  email?: string;
}

const Profile = ({ userName, email }: ProfileProps) => {
  const router = useRouter();
  const onOpen = useModalStore(state => state.onOpen);
  const removeUserInfo = useUserStore(state => state.removeUserInfo);

  const handleLogoutBtn = () => {
    onOpen({
      modalType: 'confirm',
      title: '로그아웃 하시겠습니까?',
      description: '재입고 알림을 받으시려면 \n로그인 상태를 유지해주세요!',
      onClick: () => {
        Storage.deleteItem(LOCAL_STORAGE_KEY.accessToken);
        removeUserInfo();
        router.replace('/');
      },
    });
  };

  return (
    <div className={profile}>
      <section>
        <div className={nameText}>{userName || '-'}</div>
        <div className={emailText}>{email}</div>
      </section>
      <button className={logoutBtn} onClick={handleLogoutBtn}>
        로그아웃
      </button>
    </div>
  );
};

export default Profile;
