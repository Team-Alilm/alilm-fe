import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetProducts } from '@/hooks/queries/use-get-baskets';

import ProductCard from '../product-card';
import BasketCardSkeleton from '../product-card/basket-card-skeleton';
import NoProducts from '../product-card-list/no-products';
import * as styles from './index.css';

interface BasketCardListProps {
  category: string;
}

const BasketCardList = ({ category }: BasketCardListProps) => {
  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
  } = useGetProducts(category);

  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage().then(r => r);
    }
  });

  const hasProducts = products && products.length > 0;

  if (!hasProducts) return <NoProducts />;

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
