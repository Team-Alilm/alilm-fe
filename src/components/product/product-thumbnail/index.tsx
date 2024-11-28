import Image from 'next/image';
import { type MyBasket, type Product } from '@/types/basket';
import { BellRing } from 'lucide-react';

import * as styles from './index.css';

export interface ProductThumbnailProps {
  tab?: 'home' | 'my-basket';
  card: 'thin' | 'full';
  thumbnailUrl?: Product['thumbnailUrl'];
  imageUrl?: Product['imageUrl'];
  isAlilm?: MyBasket['isAlilm'];
}

const ProductThumbnailImage = ({
  tab,
  card,
  thumbnailUrl,
  imageUrl,
  isAlilm,
}: ProductThumbnailProps) => {
  const validURL = tab === 'home' ? thumbnailUrl : imageUrl;

  return (
    <div className={styles.imageWrapper({ card })}>
      {validURL && (
        <Image
          src={validURL}
          className={styles.thumbnailImage({ card })}
          alt="Basket Thumbnail"
          layout="responsive"
          width={800}
          height={800}
        />
      )}

      {isAlilm && <BellRing stroke="#555BF1" className={styles.icon} />}
    </div>
  );
};

export default ProductThumbnailImage;
