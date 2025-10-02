/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useRouter } from 'next/navigation';
import Icon from '@/components/icons';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Product } from '@/types/basket';

import DeleteProductBtn from '../delete-product';
import ProductThumbnailImage from '../product-thumbnail';
import BasketCardSkeleton from './basket-card-skeleton';
import * as styles from './index.css';

type ProductProps = Product & {
  isLoading?: boolean;
  productId?: number;
  notification?: boolean;
  borderRadius?: number;
  basketId?: number;
};

const ProductCard = ({
  id,
  productId,
  basketId,
  name,
  brand,
  imageUrl,
  thumbnailUrl,
  tab,
  isLoading,
  notification,
  waitingCount,
  borderRadius,
  price,
}: ProductProps) => {
  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const router = useRouter();

  const handleWaitTogetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  const handleProductClick = () => {
    router.push(tab === 'my-basket' ? `/product/${productId}` : `/product/${id}`);
  };

  const formatPrice = (priceValue?: number) => {
    if (!priceValue) return '가격 미정';

    return `${priceValue.toLocaleString()}원`;
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
          alilm={notification}
          card="thin"
          borderRadius={borderRadius}
        />
      </div>

      <div onClick={handleProductClick} className={styles.productInfo}>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
      </div>

      {tab === 'home' && waitingCount !== undefined && waitingCount !== null && (
        <div className={styles.waitingInfo}>
          <Icon icon="UserTwoPerson" width={14} height={14} />
          <span className={styles.waitingCount}>{waitingCount}명</span>
          <span>대기 중</span>
        </div>
      )}

      {tab === 'home' && (
        <button onClick={handleWaitTogetherButtonClick} className={styles.waitTogetherButton}>
          <Icon icon="UserTwoPerson" width={14} height={14} />
          함께 기다리기
        </button>
      )}

      {tab === 'my-basket' && <DeleteProductBtn basketId={basketId ?? 0} name={name} />}
    </div>
  );
};

export default ProductCard;
