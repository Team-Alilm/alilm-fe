'use client';

import Icon from '@/components/icons';

import * as styles from './index.css';

const LoginPage = () => {
  const handleKakaoLoginClick = () => {
    window.location.href = `https://alilm.store/oauth2/authorization/kakao`;
  };

  return (
    <div className={styles.loginPage}>
      <p className={styles.title}>
        카카오계정으로
        <br />
        로그인해주세요.
      </p>
      <div className={styles.loginButton}>
        <Icon icon="KakaoLoginBtn" width={200} />
      </div>
    </div>
  );
};

export default LoginPage;
