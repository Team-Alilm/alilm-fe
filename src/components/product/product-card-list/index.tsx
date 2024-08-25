'use client';

import { Suspense } from 'react';
import SwitchCase from '@/components/design-system/switch-case';
import { useAlilmTabsValue } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';

import BasketCardList from '../basket-card-list';
import MyBasketCardList from '../my-basket-card-list';

const ProductCardList = () => {
  const alilmTab = useAlilmTabsValue();

  return (
    <div>
      <SwitchCase
        value={alilmTab}
        caseBy={{
          home: (
            <Suspense>
              <BasketCardList />
            </Suspense>
          ),
          myAlilm: (
            <Suspense>
              <MyBasketCardList />
            </Suspense>
          ),
        }}
        defaultComponent={
          <Suspense>
            <BasketCardList />
          </Suspense>
        }
      />
    </div>
  );
};

export default ProductCardList;
