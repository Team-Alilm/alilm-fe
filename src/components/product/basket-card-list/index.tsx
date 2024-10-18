import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetBaskets } from '@/hooks/queries/use-get-baskets';

import BasketCard from '../basket-card';
import BasketCardSkeleton from '../basket-card/basket-card-skeleton';
import * as styles from './index.css';

const BasketCardList = () => {
  const {
    data: baskets,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
  } = useGetBaskets();

  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage().then(r => r);
    }
  });

  return (
    <div className={styles.basketCardList}>
      {baskets?.map(basket => (
        <BasketCard key={basket?.id} {...basket} tab="home" isLoading={isLoading} />
      ))}

      {isFetchingNextPage &&
        [...Array(5)].map((_, index) => <BasketCardSkeleton key={`skeleton-${index}`} />)}

      {hasNextPage && <div ref={observeRef} />}
    </div>
  );
};

export default BasketCardList;
