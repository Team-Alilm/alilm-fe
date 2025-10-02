'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/icons';
import { useGetUnreadCount } from '@/hooks/queries/use-get-read-n-count';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { useUserStore } from '@/store/use-user-store';

import * as styles from './index.css';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleLoginBtn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_OAUTH_URL}/oauth2/authorization/kakao`;
  };

  const [accessToken, setAccessToken] = useState<string | null>(null);

  const userAccessToken = useUserStore(state => state.accessToken);

  const token = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  const { data: unreadCount } = useGetUnreadCount(accessToken);
  const unreadNotificationCount = unreadCount?.count ?? 0;

  return (
    <header className={styles.header} style={{ display: pathname === '/login' ? 'none' : 'flex' }}>
      <Image
        src="/icons/logo.svg"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
        width={86}
        height={26}
        alt="Logo"
        priority
      />
      <div className={styles.rightHeaderWrapper}>
        {userAccessToken ? (
          <>
            <button
              className={styles.notificationWrapper}
              onClick={() => router.push('/notification-history')}
            >
              <Icon icon="Bell" width={24} height={24} cursor="pointer" stroke="#101010" />
              {unreadNotificationCount > 0 && <span className={styles.notificationBadge} />}
            </button>
            <Icon
              icon="Avatar"
              width={36}
              height={36}
              cursor="pointer"
              onClick={() => (userAccessToken ? router.push('/mypage') : openLoginModal())}
              // onClick={() => router.push(accessToken ? '/mypage' : `/login?redirect=/mypage`)}
            />
          </>
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
