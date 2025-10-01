'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as styles from './index.css';

interface InstagramProductCardProps {
  id: number;
  productName: string;
  imageUrl: string;
  waitingCount?: number;
}

const InstagramProductCard = ({
  id,
  productName,
  imageUrl,
  waitingCount,
}: InstagramProductCardProps) => {
  const router = useRouter();
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={styles.imageWrapper}>
        {!imgError ? (
          <Image
            src={imageUrl}
            alt={productName}
            fill
            sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className={styles.image}
            priority={false}
            quality={75}
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              fontSize: '1.2rem',
              color: '#999',
            }}
          >
            이미지 로드 실패
          </div>
        )}
        {waitingCount && waitingCount > 0 && (
          <div className={styles.overlay}>
            <div className={styles.waitingInfo}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className={styles.waitingCount}>{waitingCount.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstagramProductCard;
