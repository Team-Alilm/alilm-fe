'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ScrollToTop from '@/components/common/scroll-to-top';
import Spacer from '@/components/design-system/spacer';
import ProductsFilter from '@/components/product/products-filter';
import ProductsGrid from '@/components/product/products-grid';

import * as styles from './page.css';

const ProductsContent = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get('category') || '';
  const sort = (searchParams.get('sort') as string) || 'WAITING_COUNT_DESC';
  const search = searchParams.get('search') || '';

  return (
    <>
      <div className={styles.container}>
        <Spacer height={20} />

        <div className={styles.header}>
          <h1 className={styles.title}>전체 상품</h1>
        </div>

        <Spacer height={20} />

        <ProductsFilter />

        <Spacer height={20} />

        <Suspense fallback={<div>로딩 중...</div>}>
          <ProductsGrid category={category} sort={sort} search={search} />
        </Suspense>

        <Spacer height={80} />
      </div>

      <ScrollToTop />
    </>
  );
};

const ProductsPage = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default ProductsPage;
