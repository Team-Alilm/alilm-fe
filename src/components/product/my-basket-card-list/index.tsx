import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetMyBaskets } from '@/hooks/quries/use-get-my-baskets';

import MyBasketCard from '../my-basket-card';
import * as styles from './index.css';

const MyBasketCardList = () => {
  const { data: myBaskets, fetchNextPage, hasNextPage, isFetching } = useGetMyBaskets();
  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <div className={styles.myBasketCardList}>
      {myBaskets.map(myBasket => (
        <MyBasketCard key={myBasket.id} {...myBasket} />
      ))}
      {hasNextPage && <div ref={observeRef} />}
    </div>
  );
};

export default MyBasketCardList;
