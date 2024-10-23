'use client';

import { usePathname, useRouter } from 'next/navigation';
import Modal from '@/components/common/modal/modal';
import Icon from '@/components/icons';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { X } from 'lucide-react';

import { closeModalBtn, loginDescription, loginModal, loginTitle, textSection } from './index.css';

const LoginModal = () => {
  const isLoginModalOpen = useLoginModalStore(state => state.isLoginModalOpen);
  const closeLoginModal = useLoginModalStore(state => state.closeLoginModal);
  const router = useRouter();
  const pathname = usePathname();

  const handleLoginBtn = () => {
    router.push(`https://alilm.store/oauth2/authorization/kakao`);
  };

  const handleCloseModalBtn = () => {
    closeLoginModal();
    if (pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <>
      {isLoginModalOpen ? (
        <Modal>
          <div className={loginModal}>
            <div className={closeModalBtn}>
              <X width={24} cursor="pointer" onClick={handleCloseModalBtn} />
            </div>
            <Icon icon="Bell" width={28} height={28} stroke="#000" fill="#000" />
            <section className={textSection}>
              <h1 className={loginTitle}>{`사고 싶은 품절 상품\n알림받고 바로 사요!`}</h1>
              <h3 className={loginDescription}>누구보다 빠르게 재입고 소식을 알려드릴게요!</h3>
            </section>
            <Icon
              icon="KakaoLoginBtn"
              width={276}
              height={51}
              cursor="pointer"
              onClick={handleLoginBtn}
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default LoginModal;
