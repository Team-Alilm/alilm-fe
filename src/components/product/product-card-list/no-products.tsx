'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/design-system/button';
import Spacer from '@/components/design-system/spacer';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { useUserStore } from '@/store/use-user-store';

import * as styles from './index.css';

const NoProducts = () => {
  const userAccessToken = useUserStore(state => state.accessToken);
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);

  const router = useRouter();

  const handleMoveCreatePage = () => {
    if (userAccessToken) {
      router.push('/create');
    } else {
      openLoginModal();
    }
  };

  return (
    <div className={styles.noProducts}>
      <h2 style={{ fontSize: '2rem', color: '#101010', marginBottom: '0.4rem' }}>
        아직 등록된 상품이 없습니다
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#3D3D3D' }}> 기다리는 품절 상품을 등록하세요</p>
      <Spacer height={20} />
      <Button onClick={handleMoveCreatePage}>재입고 알림 신청하기</Button>
    </div>
  );
};

export default NoProducts;
