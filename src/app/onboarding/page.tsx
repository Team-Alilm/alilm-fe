'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';

import { nextButton, onboardingPage, slideContent, swiperContainer } from './index.css'; // 스타일 파일 import

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OnboardingPage = () => {
  const swiperRef = useRef<null | SwiperClass>(null); // Swiper 인스턴스를 참조할 Ref 생성

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // 다음 슬라이드로 이동
    }
  };

  return (
    <div className={onboardingPage}>
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, type: 'bullets' }}
        modules={[Navigation, Pagination]}
        className={swiperContainer} // Swiper 스타일 적용
      >
        <SwiperSlide>
          <div className={slideContent}>
            <Image
              src={'/icons/free-icon-export-8815146.png'}
              alt={'export icon'}
              style={{ cursor: 'pointer' }}
              width={100}
              height={100}
            />
            <button className={nextButton} onClick={handleNext}>
              다음
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slideContent}>
            <h2>온보딩 2</h2>
            <p>두 번째 슬라이드로, 추가적인 설명을 합니다.</p>
            <button className={nextButton} onClick={handleNext}>
              다음
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slideContent}>
            <h2>온보딩 3</h2>
            <p>세 번째 슬라이드입니다. 앱 사용법을 요약합니다.</p>
            <button className={nextButton} onClick={handleNext}>
              다음
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnboardingPage;
