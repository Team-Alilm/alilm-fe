import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetOrderResponse } from '@/hooks/queries/use-get-order';

import ProductCard from '../product-card';
import BasketCardSkeleton from '../product-card/basket-card-skeleton';
import NoProducts from '../product-card-list/no-products';
import * as styles from './index.css';

interface BasketCardListProps {
  category: string;
  sort: string;
}

const BasketCardList = ({ category, sort }: BasketCardListProps) => {
  const {
    data: sortedData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
  } = useGetOrderResponse(category, sort);

  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const hasProducts = sortedData && sortedData.length > 0;

  if (!hasProducts) return <NoProducts />;

  return (
    <div className={styles.basketCardList}>
      {sortedData.map(product => (
        <ProductCard key={product.id} {...product} tab="home" isLoading={isLoading} />
      ))}

      {isFetchingNextPage &&
        [...Array(5)].map((_, index) => <BasketCardSkeleton key={`skeleton-${index}`} />)}

      {hasNextPage && <div ref={observeRef} />}
    </div>
  );
};

export default BasketCardList;
