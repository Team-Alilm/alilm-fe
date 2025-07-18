'use client';

import { Suspense, useState } from 'react';
import Image from 'next/image';
import Divider from '@/components/design-system/divider';
import Spacer from '@/components/design-system/spacer';
import SwitchCase from '@/components/design-system/switch-case';
import { useAlilmTabsValue } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';
import { Controller, useForm } from 'react-hook-form';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import BasketCardList from '../basket-card-list';
import MyBasketCardList from '../my-basket-card-list';
import * as styles from './index.css';
import SortSelect from './sort-select';

import 'swiper/css';

export const PRODUCTS_CATEGORIES = [
  { name: '전체', value: 'ALL', iconImageUrl: '/icons/img_category_all.svg' },
  { name: '스포츠/레저', value: 'SPORTS_LEISURE', iconImageUrl: '/icons/img_category_sports.svg' },
  { name: '상의', value: 'TOPS', iconImageUrl: '/icons/img_category_top.svg' },
  { name: '신발', value: 'SHOES', iconImageUrl: '/icons/img_category_shoes.svg' },
  { name: '아우터', value: 'OUTERWEAR', iconImageUrl: '/icons/img_category_outer.svg' },
  { name: '가방', value: 'BAGS', iconImageUrl: '/icons/img_category_bag.svg' },
  { name: '바지', value: 'PANTS', iconImageUrl: '/icons/img_category_pants.svg' },
  {
    name: '속옷/홈웨어',
    value: 'UNDERWEAR_HOMEWEAR',
    iconImageUrl: '/icons/img_category_home.svg',
  },
  { name: '원피스/스커트', value: 'DRESSES_SKIRTS', iconImageUrl: '/icons/img_category_skirt.svg' },
  {
    name: '패션소품',
    value: 'FASHION_ACCESSORIES',
    iconImageUrl: '/icons/img_category_accessories.svg',
  },
  { name: '뷰티', value: '뷰티', iconImageUrl: '/icons/img_category_beauty.svg' },
  { name: '디지털', value: '디지털/라이프', iconImageUrl: '/icons/img_category_digital.svg' },
];

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

const ProductCardList = () => {
  const alilmTab = useAlilmTabsValue();

  const { control, watch } = useForm({ defaultValues: { category: 'ALL' } });
  const selectedCategory = watch('category');

  const categoryChunks = chunkArray(PRODUCTS_CATEGORIES, 10);
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryPairs = chunkArray(PRODUCTS_CATEGORIES, 2); // 2개씩 자르기 → 한 슬라이드당 2개 카테고리
  type SortValue = 'WAITING_COUNT_DESC' | 'PRICE_ASC' | 'PRICE_DESC' | 'CREATED_DATE_DESC';

  const [sort, setSort] = useState<SortValue>('WAITING_COUNT_DESC');

  return (
    <div className={styles.productCardList}>
      {/* 카태고리 영역 */}
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
                            width={40}
                            height={40}
                            style={{ borderRadius: '100%' }}
                          />
                          <p>{category.name}</p>
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

      <Spacer height={20} />
      <Divider thickness="thin" />
      <Spacer height={40} />

      <SwitchCase
        value={alilmTab}
        caseBy={{
          home: (
            <Suspense fallback={<BasketCardList category={selectedCategory} sort={sort} />}>
              <div style={{ display: 'flex', margin: '0 2rem 2rem auto' }}>
                <SortSelect value={sort} onChange={setSort} />
              </div>
              <BasketCardList category={selectedCategory} sort={sort} />
            </Suspense>
          ),
          myAlilm: (
            <Suspense>
              <MyBasketCardList type="home" />
            </Suspense>
          ),
        }}
        defaultComponent={
          <Suspense>
            <BasketCardList category={selectedCategory} sort={sort} />
          </Suspense>
        }
      />
    </div>
  );
};

export default ProductCardList;
