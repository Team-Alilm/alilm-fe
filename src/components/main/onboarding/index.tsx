'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/common/modal/modal';
// useRouter를 통해 페이지 이동
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';

import { buttonContainer, content, modal, nextButton, slide } from './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface OnboardingProps {
  onClose: () => void;
}

const ONBOARDING_IMAGES = ['onboarding_1', 'onboarding_2'];

const OnboardingModal = ({ onClose }: OnboardingProps) => {
  const swiperRef = useRef<null | SwiperClass>(null);

  const [buttonText, setButtonText] = useState('다음');

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setButtonText(swiperRef.current.isEnd ? '닫기' : '다음');
    }
  };
  /**
   * 온보딩 버튼 핸들링
   */
  const handleNextBtn = () => {
    if (swiperRef.current) {
      if (swiperRef.current.isEnd) {
        localStorage.setItem('showOnboarding', 'completed');
        onClose();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <Modal>
      <div className={modal}>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, EffectFade]}
        >
          {ONBOARDING_IMAGES.map(image => (
            <SwiperSlide key={image}>
              <div className={slide}>
                <div className={content}>
                  <Image
                    src={`/images/${image}.webp`}
                    layout={'intrinsic'}
                    alt={'onboarding imag'}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className={buttonContainer}>
            <button className={nextButton} onClick={handleNextBtn}>
              {buttonText}
            </button>
          </div>
        </Swiper>
      </div>
    </Modal>
  );
};

export default OnboardingModal;
