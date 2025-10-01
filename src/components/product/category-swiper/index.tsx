'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Controller, Control } from 'react-hook-form';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Category {
  value: string;
  name: string;
  iconImageUrl: string;
}

interface CategorySwiperProps {
  control: Control<any>;
  categoryPairs: (Category | null)[][];
  categoryChunks: Category[][];
}

const CategorySwiper = ({ control, categoryPairs, categoryChunks }: CategorySwiperProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <div className={styles.swiper}>
          <Swiper
            slidesPerView={5}
            spaceBetween={1}
            modules={[Navigation, Pagination]}
            onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            cssMode={false}
            watchOverflow={true}
            observer={true}
            observeParents={true}
            resistanceRatio={0}
          >
            {categoryPairs.map((pair, idx) => (
              <SwiperSlide key={`slide-${idx}`}>
                <div className={styles.swiperSlide}>
                  {pair.map((category, i) => {
                    if (!category) {
                      return <div key={`empty-${i}`} />;
                    }
                    const isSelected = field.value === category.value;

                    return (
                      <button
                        key={category.value}
                        onClick={() => field.onChange(category.value)}
                        className={styles.category}
                        style={{
                          fontWeight: isSelected ? '700' : 'normal',
                        }}
                      >
                        <Image
                          src={category.iconImageUrl}
                          alt={category.name}
                          width={50}
                          height={54}
                          priority
                          loading="eager"
                          style={{
                            borderRadius: '20%',
                            filter: isSelected ? 'none' : 'grayscale(100%)',
                            transition: 'filter 0.3s ease',
                          }}
                        />
                        <p className={styles.categoryText}>{category.name}</p>
                      </button>
                    );
                  })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
              gap: '0.5rem',
            }}
          >
            {categoryChunks.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? '3.2rem' : '0.8rem',
                  height: '0.4rem',
                  borderRadius: '0.2rem',
                  backgroundColor: i === activeIndex ? '#FFC814' : '#DADADA',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default CategorySwiper;
