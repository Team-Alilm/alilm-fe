import Image from 'next/image';
import Icon from '@/components/icons';
import { BasketBadge } from '@/components/product/basket-badge';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Basket } from '@/types/basket';

import BasketCardSkeleton from './basket-card-skeleton';
import * as styles from './index.css';

type BasketProps = Basket & {
  isLoading?: boolean;
};

const BasketCard = ({
  id,
  name,
  brand,
  imageUrl,
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

  if (isLoading) {
    return <BasketCardSkeleton />;
  }

  return (
    <div className={styles.basketCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          className={styles.thumbnailImage}
          alt="Basket Thumbnail"
          width={800}
          height={800}
        />
      </div>
      <div>
        <BasketBadge>{category}</BasketBadge>
        <p className={styles.name}>{name}</p>
        <p className={styles.options}>{description}</p>

        {tab === 'home' ? (
          <>
            <div className={styles.waitingCount}>
              <Icon icon="UserTwoPerson" width={12} height={12} />
              함께 기다리는 사람 <span className={styles.waitingCountStrong}>{waitingCount}</span>
            </div>
            <button onClick={handleWaitTogetherButtonClick} className={styles.waitTogetherButton}>
              함께 기다리기
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BasketCard;
