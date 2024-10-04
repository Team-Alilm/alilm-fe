'use client';

import Icon from '@/components/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as styles from './index.css';

const LoginPage = () => {
  const router = useRouter();

  const handleKakaoLoginClick = () => {
    router.push(`https://alilm.store/oauth2/authorization/kakao`);
  };

  return (
    <div className={styles.loginPage}>
      <p className={styles.title}>
        카카오계정으로
        <br />
        로그인해주세요.
      </p>
      <div
        className={styles.loginButton}
        role="button"
        tabIndex={0}
        onKeyDown={handleKakaoLoginClick}
        onClick={handleKakaoLoginClick}
      >
        <Icon icon="KakaoLoginBtn" width={180} cursor="pointer" />
      </div>
    </div>
  );
};

export default LoginPage;
