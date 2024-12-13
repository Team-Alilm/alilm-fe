/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/navigation';
import { BasketBadge } from '@/components/product/basket-badge';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Product } from '@/types/basket';

import DeleteProductBtn from '../delete-product';
import ProductThumbnailImage from '../product-thumbnail';
import WaitingCounts from '../waiting-counts';
import BasketCardSkeleton from './basket-card-skeleton';
import * as styles from './index.css';

type ProductProps = Product & {
  isLoading?: boolean;
  productId?: number;
  isAlilm?: string;
};

const ProductCard = ({
  id,
  productId,
  name,
  brand,
  imageUrl,
  thumbnailUrl,
  firstCategory,
  firstOption,
  secondOption,
  thirdOption,
  waitingCount,
  tab,
  isLoading,
  isAlilm,
}: ProductProps) => {
  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const description = `${brand}${firstOption ? ` / ${firstOption}` : ''}${secondOption ? ` / ${secondOption}` : ''}${thirdOption ? ` / ${thirdOption}` : ''}`;

  const router = useRouter();

  const handleWaitTogetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  const handleProductClick = () => {
    router.push(tab === 'my-basket' ? `/product/${productId}` : `/product/${id}`);
  };

  if (isLoading || !id) {
    return <BasketCardSkeleton />;
  }

  return (
    <div className={styles.basketCard}>
      <div onClick={handleProductClick} style={{ cursor: 'pointer', width: '100%' }}>
        <ProductThumbnailImage
          imageUrl={imageUrl}
          thumbnailUrl={thumbnailUrl}
          tab={tab}
          isAlilm={isAlilm}
          card={'thin'}
        />
      </div>
      <div>
        <div onClick={handleProductClick} className={styles.productInfo}>
          <BasketBadge>{firstCategory}</BasketBadge>
          <p className={styles.name}>{name}</p>
          <p className={styles.options}>{description}</p>
        </div>
        {tab && <WaitingCounts counts={waitingCount} />}
        {tab === 'home' && (
          <button onClick={handleWaitTogetherButtonClick} className={styles.waitTogetherButton}>
            함께 기다리기
          </button>
        )}
        {tab === 'my-basket' && <DeleteProductBtn id={id} name={name} />}
      </div>
    </div>
  );
};

export default ProductCard;
