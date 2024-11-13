'use client';

import { Suspense } from 'react';
import Spacer from '@/components/design-system/spacer';
import PageTitle from '@/components/mypage/page-title';
import MyBasketCardList from '@/components/product/my-basket-card-list';

import { myAlilm } from './index.css';

const MyAlilm = () => {
  return (
    <div className={myAlilm}>
      <PageTitle text="나의 알림" />
      <Suspense>
        <MyBasketCardList type="mypage" />
      </Suspense>
      <Spacer height={40} />
    </div>
  );
};

export default MyAlilm;
