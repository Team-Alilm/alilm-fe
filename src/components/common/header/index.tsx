'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/icons';
import useGetMyInfo from '@/hooks/quries/use-get-my-info';
import { Storage } from '@/libs/storage';

import * as styles from './index.css';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  const { data: myInfo, isFetching } = useGetMyInfo();

  console.log('myInfo>>', myInfo);

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

        <Icon icon="Bell" width={24} height={24} />

        <Icon icon="Avatar" width={36} height={36} />
      </div>
    </header>
  );
};

export default Header;
