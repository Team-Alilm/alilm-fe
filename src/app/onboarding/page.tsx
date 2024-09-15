'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // useRouter를 통해 페이지 이동
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';

import { content, imageContainer, infoText, nextButton, onboardingPage, slide } from './index.css'; // 스타일 파일 import

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OnboardingPage = () => {
  const swiperRef = useRef<null | SwiperClass>(null); // Swiper 인스턴스를 참조할 Ref 생성
  const router = useRouter(); // 페이지 이동을 위한 useRouter

  // "시작하기" 버튼 클릭 시 실행되는 함수
  const handleStart = () => {
    localStorage.setItem('showOnboarding', 'false'); // 로컬스토리지에 값 저장
    router.push('/'); // 메인 페이지로 이동
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
      >
        <SwiperSlide>
          <div className={slide}>
            <div className={imageContainer}>
              <Image src={'/icons/export.png'} alt={'export icon'} width={100} height={100} />
            </div>
            <div className={content}>
              <Image
                src={'/images/musinsa_guide.png'}
                layout={'responsive'}
                alt={'export icon'}
                width={300}
                height={50}
              />
              <div className={infoText}>
                무신사에서 공유하기 버튼을 클릭하고
                <br />
                Url 복사 하여 쉽게 재입고 추적이 가능해요!
                <br />
                상품 재 입고 시 이메일로 발송해 드려요!
              </div>
            </div>

            <button className={nextButton} onClick={handleStart}>
              시작하기
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnboardingPage;
