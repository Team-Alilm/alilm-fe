import { useGetMyBaskets } from '@/hooks/queries/use-get-my-baskets';

import ProductCard from '../basket-card';
import * as styles from './index.css';

const RelatedProductList = () => {
  const { data: myBaskets } = useGetMyBaskets();

  return (
    <div className={styles.cardList}>
      {myBaskets?.map(myBasket => (
        <div key={myBasket.id} className={styles.cardWrapper}>
          <ProductCard {...myBasket} />
        </div>
      ))}
    </div>
  );
};

export default RelatedProductList;
