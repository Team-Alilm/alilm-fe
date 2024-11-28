/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BasketBadge } from '@/components/product/basket-badge';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Product } from '@/types/basket';
import { BellRing } from 'lucide-react';

import WaitingCounts from '../waiting-counts';
import BasketCardSkeleton from './basket-card-skeleton';
import * as styles from './index.css';

type BasketProps = Product & {
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
  category,
  firstOption,
  secondOption,
  thirdOption,
  waitingCount,
  tab,
  isLoading,
  isAlilm,
}: BasketProps) => {
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
        <div className={styles.imageWrapper}>
          <Image
            src={tab === 'home' ? thumbnailUrl : imageUrl}
            className={styles.thumbnailImage}
            alt="Basket Thumbnail"
            layout="responsive"
            width={0}
            height={0}
            sizes="100vw"
          />
          {isAlilm && <BellRing stroke="#555BF1" className={styles.icon} />}
        </div>
      </div>
      <div>
        <div onClick={handleProductClick} style={{ cursor: 'pointer', width: '100%' }}>
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
