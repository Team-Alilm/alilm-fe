import { type MyBasket } from '@/types/basket';

import BasketBadge from '../basket-badge';
import * as styles from './index.css';

type MyBasketProps = MyBasket;

const MyBasketCard = ({
  name,
  imageUrl,
  category,
  firstOption,
  secondOption,
  thirdOption,
}: MyBasketProps) => {
  const options = [firstOption, secondOption, thirdOption].filter(option => option !== '');

  return (
    <div className={styles.myBasketCard}>
      <img src={imageUrl} className={styles.thumbnailImage} alt="My Basket Thubnail" />
      <BasketBadge>{category}</BasketBadge>
      <p className={styles.description}>{name}</p>
      <p className={styles.options}>{options.join(' / ')}</p>
    </div>
  );
};

export default MyBasketCard;
