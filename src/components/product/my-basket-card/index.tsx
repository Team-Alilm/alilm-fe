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
        alt="Basket Thumbnail"
        width={200}
        height={200}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <div>
        <BasketBadge>{category}</BasketBadge>
        <p className={styles.name}>{name}</p>
        <p className={styles.options}>{description}</p>
        {/* 임시 주석 처리 24/10/18 */}
        {/* <WaitingCounts counts={127} />
        <button className={styles.deleteBtn}>삭제하기</button> */}
      </div>
    </div>
  );
};

export default MyBasketCard;
