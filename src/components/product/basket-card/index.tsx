import Image from 'next/image';
import { BasketBadge } from '@/components/product/basket-badge';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Basket } from '@/types/basket';

import * as styles from './index.css';

type BasketProps = Basket;

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
}: BasketProps) => {
  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const description = `${brand}${firstOption ? ` / ${firstOption}` : ''}${secondOption ? ` / ${secondOption}` : ''}${thirdOption ? ` / ${thirdOption}` : ''}`;

  const handleWaitTogetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  return (
    <div className={styles.basketCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          className={styles.thumbnailImage}
          alt="Basket Thumbnail"
          width={800}
          height={800}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <div style={{}}>
        <BasketBadge>{category}</BasketBadge>
        <p className={styles.name}>{name}</p>
        <p className={styles.options}>{description}</p>
        <p className={styles.waitingCount}>
          <Image src="/icons/user.png" width={12} height={12} alt="user" /> 함께 기다리는 사람{' '}
          {waitingCount} 명
        </p>
        <button onClick={handleWaitTogetherButtonClick} className={styles.waitTogetherButton}>
          함께 기다리기
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
