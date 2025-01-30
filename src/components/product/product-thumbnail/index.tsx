import Image from 'next/image';
import { type MyBasket, type Product } from '@/types/basket';
import { BellRing } from 'lucide-react';
import * as styles from './index.css';
import Icon from '@/components/icons';

export interface ProductThumbnailProps {
  tab?: 'home' | 'my-basket';
  card: 'thin' | 'full';
  thumbnailUrl?: Product['thumbnailUrl'];
  imageUrl?: Product['imageUrl'];
  alilm?: MyBasket['alilm'];
  counts?: number;
}

const ProductThumbnailImage = ({
  tab,
  card,
  thumbnailUrl,
  imageUrl,
  alilm,
  counts,
}: ProductThumbnailProps) => {
  const validURL = tab === 'home' ? thumbnailUrl : imageUrl;

  return (
    <div className={styles.imageWrapper({ card })}>
      {validURL && (
        <>
          <Image
            src={validURL}
            className={styles.thumbnailImage({ card })}
            alt="Basket Thumbnail"
            layout="responsive"
            width={800}
            height={800}
            priority
          />
          <div className={styles.iconWrapper}>
            <Icon icon="Bell" width={20} height={20} stroke="rgba(135, 96, 225, 0.8)" />
          </div>
          <div className={styles.iconWrapper1}>
            <Icon icon="UserTwoPerson" width={12} height={12} />
            {counts}
          </div>
        </>
      )}
      {alilm && (
        <div className={styles.iconBackground}>
          <BellRing stroke="#555BF1" className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default ProductThumbnailImage;
