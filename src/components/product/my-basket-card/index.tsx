import Image from 'next/image';
import { type MyBasket } from '@/types/basket';

import { BasketBadge, BrandBadge } from '../basket-badge';
import * as styles from './index.css';

type MyBasketProps = MyBasket;

const MyBasketCard = ({
  name,
  brand,
  imageUrl,
  category,
  price,
  firstOption,
  secondOption,
  thirdOption,
}: MyBasketProps) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <div className={styles.myBasketCard}>
      <Image
        src={imageUrl}
        className={styles.thumbnailImage}
        alt="Basket Thubnail"
        width={800}
        height={800}
        layout="responsive"
      />
      <BasketBadge>{category}</BasketBadge>
      <p className={styles.name}>{name}</p>
      <BrandBadge>{brand}</BrandBadge>
      <p className={styles.options}>{firstOption}</p>
      <p className={styles.options}>{secondOption}</p>
      <p className={styles.options}>{thirdOption}</p>
      <p className={styles.price}>{formattedPrice}원</p>
    </div>
  );
};

export default MyBasketCard;
