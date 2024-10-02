'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// useRouter를 통해 페이지 이동
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';

import {
  background,
  buttonContainer,
  content,
  nextButton,
  onboardingModal,
  slide,
} from './index.css'; // 스타일 파일 import

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

  useEffect(() => {
    // 모달이 열렸을 때 스크롤 막기
    document.body.style.overflow = 'hidden';

    // 모달이 닫힐 때 스크롤 다시 활성화
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={background}>
      <div className={onboardingModal}>
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
    </div>
  );
};

export default OnboardingModal;
