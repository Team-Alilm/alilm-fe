import { useEffect, useState } from 'react';
import Image from 'next/image';
import { type MyBasket, type Product } from '@/types/basket';
import { getMessageSentStatus, saveMessageSentStatus } from '@/utils/local-storage';
import { BellRing, Users } from 'lucide-react';

import * as styles from './index.css';

export interface ProductThumbnailProps {
  tab?: 'home' | 'my-basket';
  card: 'thin' | 'full';
  thumbnailUrl?: Product['thumbnailUrl'];
  imageUrl?: Product['imageUrl'];
  alilm?: MyBasket['alilm'];
  counts?: number;
  id: number;
  ifsent: boolean;
}

const ProductThumbnailImage = ({
  tab,
  card,
  thumbnailUrl,
  imageUrl,
  alilm,
  counts,
  id,
  ifsent: initialIfSent,
}: ProductThumbnailProps) => {
  const [isMessageSent, setIsMessageSent] = useState<boolean>(() => {
    // localStorage에서 상태를 가져옴
    const storedStatus = getMessageSentStatus(id);
    // 저장된 값이 없으면 props의 초기값 사용

    return storedStatus ?? initialIfSent;
  });
  useEffect(() => {
    if (alilm) {
      // alilm이 undefined가 아닐 때만 처리
      setIsMessageSent(true); // alilm의 값을 boolean으로 변환하여 저장
      saveMessageSentStatus(id, true);
    }
  }, [alilm, id]);

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
          {isMessageSent && (
            <div className={styles.iconWrapper}>
              <BellRing width={20} height={20} stroke="rgba(135, 96, 225, 0.8)" />
            </div>
          )}
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
