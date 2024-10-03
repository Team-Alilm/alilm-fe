'use client';

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
      <div className={styles.loginButton}>
        <Image
          src="/icons/kakao_login_medium_wide.png"
          onClick={handleKakaoLoginClick}
          alt="kakao login logo"
          width={300}
          height={45}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
