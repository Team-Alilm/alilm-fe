'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// useRouter를 통해 페이지 이동
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';

import { background, content, nextButton, onboardingModal, slide } from './index.css'; // 스타일 파일 import

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface OnboardingProps {
  onClose: () => void;
}

const OnboardingModal = ({ onClose }: OnboardingProps) => {
  const swiperRef = useRef<null | SwiperClass>(null); // Swiper 인스턴스를 참조할 Ref 생성
  // const modalRef = useRef(null);

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
        localStorage.setItem('showOnboarding', 'false');
        onClose();
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  useEffect(() => {
    // 모달이 열렸을 때 스크롤 막기
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트될 때(모달이 닫힐 때) 스크롤 다시 활성화
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
          pagination={{ clickable: false }}
          modules={[Navigation, Pagination, EffectFade]}
        >
          <SwiperSlide>
            <div className={slide}>
              <div className={content}>
                <Image
                  src={'/images/onboarding_1.png'}
                  layout={'intrinsic'}
                  alt={'export icon'}
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={slide}>
              <div className={content}>
                <Image
                  src={'/images/onboarding_2.png'}
                  layout={'intrinsic'}
                  alt={'export icon'}
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </SwiperSlide>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
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
