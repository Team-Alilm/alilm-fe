import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetProducts } from '@/hooks/queries/use-get-baskets';

import ProductCard from '../product-card';
import BasketCardSkeleton from '../product-card/basket-card-skeleton';
import * as styles from './index.css';

const BasketCardList = () => {
  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
  } = useGetProducts();

  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage().then(r => r);
    }
  });

  return (
    <div className={styles.basketCardList}>
      {products?.map(product => (
        <ProductCard key={product?.id} {...product} tab="home" isLoading={isLoading} />
      ))}

      {isFetchingNextPage &&
        [...Array(5)].map((_, index) => <BasketCardSkeleton key={`skeleton-${index}`} />)}

      {hasNextPage && <div ref={observeRef} />}
    </div>
  );
};

export default BasketCardList;
