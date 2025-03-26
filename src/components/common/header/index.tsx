'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/icons';
import { useGetUnreadCount } from '@/hooks/queries/use-get-read-n-count';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';

import * as styles from './index.css';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);
  const [readNCount, setReadNCount] = useState<number>(0);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleLoginBtn = () => {
    window.location.href = `https://api.algamja.com/oauth2/authorization/kakao`;
  };

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
    setAccessToken(token);
  }, []);

  // interface ReadNCount {
  //   readNCount: number;
  // }

  // useEffect(() => {
  //   if (!accessToken) return;

  //   const getReadNCount = async () => {
  //     try {
  //       const response = await get<ReadNCount>('/member/my-alilm-history/read-n-count');
  //       setReadNCount(response.readNCount);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getReadNCount();
  // }, [accessToken]);

  const { data: unreadCount } = useGetUnreadCount(accessToken);
  const unreadNotificationCount = unreadCount?.readNCount ?? 0;

  const notificationNumber = unreadNotificationCount > 99 ? '99+' : unreadNotificationCount;

  return (
    <header className={styles.header} style={{ display: pathname === '/login' ? 'none' : 'flex' }}>
      <Image
        src="/icons/logo.svg"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
        width={86}
        height={26}
        alt="Logo"
      />
      <div className={styles.rightHeaderWrapper}>
        <button
          className={styles.notificationWrapper}
          onClick={() => router.push('/notification-history')}
        >
          <Icon icon="Bell" width={24} height={24} cursor="pointer" />
          {unreadNotificationCount > 0 && (
            <span className={styles.notificationBadge}>{notificationNumber}</span>
          )}
        </button>
        {accessToken ? (
          <Icon
            icon="Avatar"
            width={36}
            height={36}
            cursor="pointer"
            onClick={() => (accessToken ? router.push('/mypage') : openLoginModal())}
            // onClick={() => router.push(accessToken ? '/mypage' : `/login?redirect=/mypage`)}
          />
        ) : (
          <button className={styles.loginBtn} onClick={handleLoginBtn}>
            카카오로 로그인하기
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
