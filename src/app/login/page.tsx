'use client';

import Image from 'next/image';

import * as styles from './index.css';

const LoginPage = () => {
  const handleKakaoLoginClick = () => {
    window.location.href = `https://alilm.store/oauth2/authorization/kakao`;
    // window.location.href = `http://172.30.1.41:8080/oauth2/authorization/kakao`;
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
