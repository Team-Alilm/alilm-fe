/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { BasketBadge } from '@/components/product/basket-badge';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Product } from '@/types/basket';

import WaitingCounts from '../waiting-counts';
import BasketCardSkeleton from './basket-card-skeleton';
import * as styles from './index.css';

type BasketProps = Product & {
  isLoading?: boolean;
};

const ProductCard = ({
  id,
  number,
  name,
  brand,
  imageUrl,
  thumbnailUrl,
  category,
  firstOption,
  secondOption,
  thirdOption,
  waitingCount,
  tab,
  isLoading,
}: BasketProps) => {
  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const description = `${brand}${firstOption ? ` / ${firstOption}` : ''}${secondOption ? ` / ${secondOption}` : ''}${thirdOption ? ` / ${thirdOption}` : ''}`;

  const handleWaitTogetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  const handleProductClick = () => {
    window.open(`https://www.musinsa.com/products/${number}`);
  };

  if (isLoading || !id) {
    return <BasketCardSkeleton />;
  }

  return (
    <div className={styles.basketCard}>
      <div onClick={handleProductClick} style={{ cursor: 'pointer' }}>
        <div className={styles.imageWrapper}>
          <Image
            src={tab === 'home' ? thumbnailUrl : imageUrl}
            className={styles.thumbnailImage}
            alt="Basket Thumbnail"
            width={800}
            height={800}
          />
        </div>
      </div>
      <div>
        <div onClick={handleProductClick} style={{ cursor: 'pointer' }}>
          <BasketBadge>{category}</BasketBadge>
          <p className={styles.name}>{name}</p>
          <p className={styles.options}>{description}</p>
        </div>
        {tab === 'home' ? (
          <>
            <WaitingCounts counts={waitingCount} />
            <button onClick={handleWaitTogetherButtonClick} className={styles.waitTogetherButton}>
              함께 기다리기
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
