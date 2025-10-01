'use client';

import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetOrderResponse } from '@/hooks/queries/use-get-order';

import InstagramProductCard from '../instagram-product-card';
import NoProducts from '../product-card-list/no-products';
import * as styles from './index.css';

interface ProductsGridProps {
  category: string;
  sort: string;
  search: string;
}

const ProductsGrid = ({ category, sort, search }: ProductsGridProps) => {
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

  const filteredData = search
    ? sortedData?.filter(product =>
        product.productName.toLowerCase().includes(search.toLowerCase())
      )
    : sortedData;

  const hasProducts = filteredData && filteredData.length > 0;

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {[...Array(12)].map((_, index) => (
          <div key={`skeleton-${index}`} className={styles.gridItem} />
        ))}
      </div>
    );
  }

  if (!hasProducts) return <NoProducts />;

  return (
    <div className={styles.grid}>
      {filteredData.map(product => (
        <InstagramProductCard
          key={product.id}
          id={product.id}
          productName={product.productName}
          imageUrl={product.imageUrl}
          waitingCount={product.waitingCount}
        />
      ))}

      {isFetchingNextPage &&
        [...Array(6)].map((_, index) => (
          <div key={`skeleton-${index}`} className={styles.gridItem} />
        ))}

      {hasNextPage && <div ref={observeRef} />}
    </div>
  );
};

export default ProductsGrid;
