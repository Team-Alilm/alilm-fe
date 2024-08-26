import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Basket } from '@/types/basket';

import BasketBadge from '../basket-badge';
import * as styles from './index.css';

type BasketProps = Basket;

const BasketCard = ({ id, name, imageUrl, category, option1, option2, option3 }: BasketProps) => {
  const { mutate: copyBasketsMutate } = useCopyBaskets();
  const options = [option1, option2, option3].filter(option => option !== null && option !== '');

  const handleWaitToggetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  return (
    <div className={styles.basketCard}>
      <img src={imageUrl} className={styles.thumbnailImage} alt="Basket Thubnail" />
      <BasketBadge>{category}</BasketBadge>
      <p className={styles.description}>{name}</p>
      <p className={styles.options}>{options.join(' / ')}</p>
      <button onClick={handleWaitToggetherButtonClick} className={styles.waitTogetherButton}>
        함께 기다리기
      </button>
    </div>
  );
};

export default BasketCard;