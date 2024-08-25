import { Suspense } from 'react';
import Spacer from '@/components/design-system/spacer';
import AlilmInfo from '@/components/main/alilm-info';
import AlilmTabs from '@/components/main/alilm-tabs';
import { AlilmTabsProvider } from '@/components/main/alilm-tabs/contexts/alilm-tabs-context';
import ProductCardList from '@/components/product/product-card-list';

import * as styles from './page.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Spacer height={40} />
      <Suspense>
        <AlilmInfo />
      </Suspense>
      <Spacer height={60} />
      <AlilmTabsProvider>
        <AlilmTabs />
        <Spacer height={28} />
        <ProductCardList />
      </AlilmTabsProvider>
      <Spacer height={80} />
    </div>
  );
};

export default MainPage;
