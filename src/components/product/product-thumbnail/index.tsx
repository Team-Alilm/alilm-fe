import Image from 'next/image';
import { type MyBasket, type Product } from '@/types/basket';
import { BellRing, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

import * as styles from './index.css';
import { saveMessageSentStatus, getMessageSentStatus } from '@/utils/localStorage';

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
  const validURL = tab === 'home' ? thumbnailUrl : imageUrl;

  const [isMessageSent, setIsMessageSent] = useState<boolean>(() => {
    // localStorage에서 상태를 가져옴
    const storedStatus = getMessageSentStatus(id);
    // 저장된 값이 없으면 props의 초기값 사용
    return storedStatus ?? initialIfSent;
  });

  useEffect(() => {
    if (alilm) {
      setIsMessageSent(true);
      // localStorage에 상태 저장
      saveMessageSentStatus(id, true);
    }
  }, [alilm, id]);

  // isMessageSent가 변경될 때마다 localStorage 업데이트
  useEffect(() => {
    saveMessageSentStatus(id, isMessageSent);
  }, [id, isMessageSent]);
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
          <div className={styles.iconWrapper1}>
            <Users
              width={12}
              height={12}
              stroke="rgba(228, 157, 16, 0.9)"
              fill="rgba(228, 157, 16, 0.9)"
            />
            {counts}
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
