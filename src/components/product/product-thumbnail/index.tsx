import Image from 'next/image';
import { type MyBasket, type Product } from '@/types/basket';
import { BellRing, Users } from 'lucide-react';

import * as styles from './index.css';

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
  console.log('alilm', alilm);

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
          {/* <div className={styles.iconWrapper}>
            <BellRing width={20} height={20} stroke="rgba(135, 96, 225, 0.8)" />
          </div> */}
          <div className={styles.iconWrapper1}>
            <Users
              width={12}
              height={12}
              stroke="rgba(228, 157, 16, 0.9)"
              fill="rgba(228, 157, 16, 0.9)"
            />
            {/* <Icon icon="UserTwoPerson" width={12} height={12} color="orange" /> */}
            {counts}
            {alilm}
          </div>
        </>
      )}
      {alilm && (
        <div className={styles.iconWrapper}>
          <BellRing width={20} height={20} stroke="rgba(135, 96, 225, 0.8)" />
        </div>
      )}
    </div>
  );
};

export default ProductThumbnailImage;
