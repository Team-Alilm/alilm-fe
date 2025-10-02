'use client';

import Image from 'next/image';
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
        <Image
          src={banners?.[0]?.imageUrl || '/images/main_banner.png'}
          alt={banners?.[0]?.title || '메인 배너'}
          className={styles.bannerImage}
          width={1200}
          height={400}
          priority
        />
      </button>
    </div>
  );
};

export default MainBanner;
