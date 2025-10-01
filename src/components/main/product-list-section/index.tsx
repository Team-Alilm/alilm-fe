'use client';

import { Suspense } from 'react';
import { AlilmTabsProvider } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';
import ProductCardList from '@/components/product/product-card-list';

const ProductListSection = () => {
  return (
    <div>
      <Suspense fallback={<div>탭 정보 초기화 중...</div>}>
        <AlilmTabsProvider>
          <ProductCardList />
        </AlilmTabsProvider>
      </Suspense>
    </div>
  );
};

export default ProductListSection;
