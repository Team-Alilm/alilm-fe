'use client';

import { Suspense } from 'react';
import Spacer from '@/components/design-system/spacer';
import SwitchCase from '@/components/design-system/switch-case';
import { useAlilmTabsValue } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';

import BasketCardList from '../basket-card-list';
import MyBasketCardList from '../my-basket-card-list';
import * as styles from './index.css';

export const PRODUCTS_CATEGORIES = [
  { name: '전체', value: '', iconImageUrl: '/icons/img_category_all.svg' },
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

export const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

const ProductCardList = () => {
  const alilmTab = useAlilmTabsValue();

  return (
    <div className={styles.productCardList}>
      <Spacer height={40} />

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>전체 상품</h2>
        <p className={styles.sectionSubtitle}>대기자가 많은 순서대로 보여드려요</p>
      </div>

      <Spacer height={24} />

      <SwitchCase
        value={alilmTab}
        caseBy={{
          home: (
            <Suspense fallback={<BasketCardList category="" sort="WAITING_COUNT_DESC" />}>
              <BasketCardList category="" sort="WAITING_COUNT_DESC" />
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
            <BasketCardList category="" sort="WAITING_COUNT_DESC" />
          </Suspense>
        }
      />
    </div>
  );
};

export default ProductCardList;
