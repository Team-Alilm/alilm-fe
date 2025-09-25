'use client';

import { useRouter } from 'next/navigation';
import { useGetBanners } from '@/hooks/queries/use-get-banners';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { useUserStore } from '@/store/use-user-store';

import * as styles from './index.css';

const MainBanner = () => {
  const router = useRouter();
  const { data: banners } = useGetBanners();
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);
  const userAccessToken = useUserStore(state => state.accessToken);

  const handleMoveCreatePage = () => {
    if (userAccessToken) {
      router.push('/create');
    } else {
      openLoginModal();
    }
  };

  return (
    <div className={styles.mainBanner}>
      <button type="button" onClick={handleMoveCreatePage} className={styles.bannerButton}>
        <img
          src={banners?.[0]?.imageUrl}
          alt={banners?.[0]?.title}
          className={styles.bannerImage}
        />
      </button>
    </div>
  );
};

export default MainBanner;
