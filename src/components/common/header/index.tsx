'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Storage } from '@/libs/storage';

import * as styles from './index.css';

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
            Storage.deleteItem('access-token');
          }}
        >
          로그아웃
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
