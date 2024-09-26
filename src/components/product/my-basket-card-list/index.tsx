import { useGetMyBaskets } from '@/hooks/quries/use-get-my-baskets';

import BasketCard from '../basket-card';
import * as styles from './index.css';

const MyBasketCardList = () => {
  const { data: myBaskets } = useGetMyBaskets();

  return (
    <div className={styles.myBasketCardList}>
      {myBaskets.map(myBasket => (
        <BasketCard key={myBasket.id} {...myBasket} tab="my-basket" />
      ))}
    </div>
  );
};

export default MyBasketCardList;
