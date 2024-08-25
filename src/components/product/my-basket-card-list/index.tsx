import { useGetMyBaskets } from '@/hooks/quries/use-get-my-baskets';

import MyBasketCard from '../my-basket-card';
import * as styles from './index.css';

const MyBasketCardList = () => {
  const { data: myBaskets } = useGetMyBaskets();

  return (
    <div className={styles.myBasketCardList}>
      {myBaskets.map(myBasket => (
        <MyBasketCard key={myBasket.id} {...myBasket} />
      ))}
    </div>
  );
};

export default MyBasketCardList;
