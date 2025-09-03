/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/navigation';
import { type MyBasket } from '@/types/basket';

import { BasketBadge } from '../basket-badge';
import DeleteProductBtn from '../delete-product';
import ProductThumbnailImage from '../product-thumbnail';
import WaitingCounts from '../waiting-counts';
import * as styles from './index.css';

type MyBasketProps = MyBasket;

const MyBasketCard = ({
  basketId,
  productId,
  name,
  brand,
  thumbnailUrl,
  firstCategory,
  firstOption,
  secondOption,
  thirdOption,
  waitingCount,
  notification,
}: MyBasketProps) => {
  const description = `${brand}${firstOption ? ` / ${firstOption}` : ''}${secondOption ? ` / ${secondOption}` : ''}${thirdOption ? ` / ${thirdOption}` : ''}`;

  const router = useRouter();

  const openProductDetail = () => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className={styles.myBasketCard}>
      <button onClick={openProductDetail} className={styles.thumbnailUrlBtn}>
        <ProductThumbnailImage thumbnailUrl={thumbnailUrl} alilm={notification} card={'full'} />
      </button>
      <div className={styles.productInfo}>
        <BasketBadge>{firstCategory || '-'}</BasketBadge>
        <p className={styles.name} onClick={openProductDetail}>
          {name}
        </p>
        <p className={styles.options}>{description}</p>
        <WaitingCounts counts={waitingCount} />
        <DeleteProductBtn basketId={basketId} name={name} />
      </div>
    </div>
  );
};

export default MyBasketCard;
