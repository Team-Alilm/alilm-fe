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

  const { data: myInfo } = useGetMyInfo({
    // interceptorResponseRejected에서 401에러 발생하면 /login으로 이동하도록 설정되어있고,
    // /login으로 이동하면 useGetMyInfo api가 또 호출하면서 401을 뱉어서 무한루프에 빠지는 문제가 있습니다.
    // 그래서 아래와 같이 enabled를 설정해주었습니다.
    enabled: pathname !== '/login' && Boolean(Storage.getItem('access-token')),
  });

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

        <Icon icon="Bell" width={24} height={24} />

        {myInfo?.email ? (
          <Icon
            icon="Avatar"
            width={36}
            height={36}
            cursor="pointer"
            onClick={() => router.push('/mypage')}
          />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
