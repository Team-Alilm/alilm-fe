'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/icons';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';

import * as styles from './index.css';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleLoginBtn = () => {
    window.location.href = `https://alilm.store/oauth2/authorization/kakao`;
  };

  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);

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
        {/* 임시 주석 처리 24/10/06 */}
        {/* <button
          onClick={() => {
            Storage.deleteItem('access-token');
          }}
        >
          로그아웃
        </button> */}

        <Icon
          icon="Bell"
          width={24}
          height={24}
          onClick={() => router.push('/notifications')}
          cursor="pointer"
        />
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
