'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import * as styles from './index.css';
import { Storage } from '@/libs/storage';

const Header = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  const pathname = usePathname();

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
          onClick={() => {
            if (Storage.getItem('access-token')) {
              Storage.deleteItem('access-token');
              router.push('/');
            } else {
              router.push('/login');
            }
          }}
        >
          {Storage.getItem('access-token') ? '로그아웃' : '카카오로 로그인하기'}
        </button>
        <Image
          src="/icons/alilm.svg"
          className={styles.alilmIcon}
          width={24}
          height={24}
          alt="Alilm Icon"
        />
      </div>
    </header>
  );
};

export default Header;
