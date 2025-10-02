import Image from 'next/image';
import { type MyBasket, type Product } from '@/types/basket';
import { BellRing, Users } from 'lucide-react';

import * as styles from './index.css';

export interface ProductThumbnailProps {
  card: 'thin' | 'full' | 'slide';
  thumbnailUrl?: Product['thumbnailUrl'];
  imageUrl?: Product['imageUrl'];
  alilm?: MyBasket['notification'];
  counts?: number;
  borderRadius?: number;
}

const ProductThumbnailImage = ({
  card,
  thumbnailUrl,
  alilm,
  counts,
  borderRadius,
}: ProductThumbnailProps) => {
  return (
    <div className={styles.imageWrapper({ card })}>
      {thumbnailUrl && (
        <>
          <Image
            src={thumbnailUrl}
            className={styles.thumbnailImage({
              card,
              borderRadius: borderRadius === 0 ? 'none' : 'rounded',
            })}
            alt="Basket Thumbnail"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
          />

          {counts !== undefined && counts !== null && (
            <div className={styles.iconWrapper1}>
              <Users
                width={12}
                height={12}
                stroke="rgba(228, 157, 16, 0.9)"
                fill="rgba(228, 157, 16, 0.9)"
              />
              {counts}
            </div>
          )}
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
