import Image from 'next/image';
import { type MyBasket } from '@/types/basket';

import { BasketBadge } from '../basket-badge';
import * as styles from './index.css';

type MyBasketProps = MyBasket;

const MyBasketCard = ({
  name,
  brand,
  imageUrl,
  category,
  firstOption,
  secondOption,
  thirdOption,
}: MyBasketProps) => {
  const description = `${brand}${firstOption ? ` / ${firstOption}` : ''}${secondOption ? ` / ${secondOption}` : ''}${thirdOption ? ` / ${thirdOption}` : ''}`;

  return (
    <div className={styles.myBasketCard}>
      <Image
        src={imageUrl}
        className={styles.thumbnailImage}
        alt="Basket Thubnail"
        width={800}
        height={800}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
      />
      <BasketBadge>{category}</BasketBadge>
      <p className={styles.name}>{name}</p>
      <p className={styles.options}>{description}</p>
    </div>
  );
};

export default MyBasketCard;
