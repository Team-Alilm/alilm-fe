'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { onboardingPage, slideContent, swiperContainer } from './index.css'; // 스타일 파일 import

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OnboardingPage = () => {
  return (
    <div className={onboardingPage}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, type: 'bullets' }}
        modules={[Navigation, Pagination]}
        className={swiperContainer} // Swiper 스타일 적용
      >
        <SwiperSlide>
          <div className={slideContent}>
            <h2>온보딩 1</h2>
            <p>첫 번째 온보딩 슬라이드입니다. 앱의 주요 기능을 설명합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slideContent}>
            <h2>온보딩 2</h2>
            <p>두 번째 슬라이드로, 추가적인 설명을 합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slideContent}>
            <h2>온보딩 3</h2>
            <p>세 번째 슬라이드입니다. 앱 사용법을 요약합니다.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnboardingPage;
