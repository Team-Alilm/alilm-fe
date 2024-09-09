import Image from 'next/image';
import { BasketBadge, BrandBadge } from '@/components/product/basket-badge';
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
  price,
  firstOption,
  secondOption,
  thirdOption,
  waitingCount,
}: BasketProps) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const handleWaitToggetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  return (
    <div className={styles.basketCard}>
      <Image
        src={imageUrl}
        className={styles.thumbnailImage}
        alt="Basket Thubnail"
        width={800}
        height={800}
        layout="responsive"
      />
      <BasketBadge>{category}</BasketBadge>
      <BrandBadge>{brand}</BrandBadge>
      <p className={styles.name}>{name}</p>
      {formattedPrice} 원
      <p className={styles.options}>
        {firstOption} {secondOption} {thirdOption}
      </p>
      <button onClick={handleWaitToggetherButtonClick} className={styles.waitTogetherButton}>
        {waitingCount} 함께 기다리기
      </button>
    </div>
  );
};

export default BasketCard;
