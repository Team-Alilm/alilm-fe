'use client';

import SwitchCase from '@/components/design-system/switch-case';
import { useAlilmTabsValue } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';

import ProductCard from '../product-card';
import * as styles from './index.css';

const ProductCardList = () => {
  const alilmTab = useAlilmTabsValue();

  return (
    <div>
      <SwitchCase
        value={alilmTab}
        caseBy={{
          home: <HomeProductCardList />,
          myAlilm: <MyAlilmProductCardList />,
        }}
        defaultComponent={<HomeProductCardList />}
      />
    </div>
  );
};

export default ProductCardList;

const HomeProductCardList = () => {
  return (
    <div className={styles.productCardList}>
      {Array.from({ length: 10 }).map((_, index) => (
        // TODO: replace key index -> unique id
        <ProductCard key={index} />
      ))}
    </div>
  );
};

const MyAlilmProductCardList = () => {
  return (
    <div className={styles.productCardList}>
      {Array.from({ length: 10 }).map((_, index) => (
        // TODO: replace key index -> unique id
        <ProductCard key={index} />
      ))}
    </div>
  );
};
