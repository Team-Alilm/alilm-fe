import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetBaskets } from '@/hooks/quries/use-get-baskets';

import BasketCard from '../basket-card';
import * as styles from './index.css';

const BasketCardList = () => {
  const { data: baskets, fetchNextPage, hasNextPage, isFetching } = useGetBaskets();
  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <div className={styles.basketCardList}>
      {baskets.map(basket => (
        <BasketCard key={basket.id} {...basket} />
      ))}
      {hasNextPage && <div ref={observeRef} />}
    </div>
  );
};

export default BasketCardList;
