/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/icons';
import { BasketBadge } from '@/components/product/basket-badge';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Product } from '@/types/basket';
import { getMessageSentStatus } from '@/utils/local-storage';

import DeleteProductBtn from '../delete-product';
import ProductThumbnailImage from '../product-thumbnail';
import BasketCardSkeleton from './basket-card-skeleton';
import * as styles from './index.css';

type ProductProps = Product & {
  isLoading?: boolean;
  productId?: number;
  alilm?: string;
  borderRadius?: number;
};

const ProductCard = ({
  id,
  productId,
  name,
  brand,
  imageUrl,
  thumbnailUrl,
  firstCategory,
  firstOption,
  secondOption,
  thirdOption,
  tab,
  isLoading,
  alilm,
  waitingCount,
  borderRadius,
}: ProductProps) => {
  const [messageStatus, setMessageStatus] = useState<boolean>(() => {
    return getMessageSentStatus(id) ?? false; // 초기값으로 false 설정
  });

  // id가 변경될 때마다 localStorage에서 상태 업데이트
  useEffect(() => {
    const status = getMessageSentStatus(id);
    if (status !== null) {
      setMessageStatus(status);
    }
  }, [id]);

  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const description = `${brand}${firstOption ? ` / ${firstOption}` : ''}${secondOption ? ` / ${secondOption}` : ''}${thirdOption ? ` / ${thirdOption}` : ''}`;

  const router = useRouter();

  const handleWaitTogetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  const handleProductClick = () => {
    router.push(tab === 'my-basket' ? `/product/${productId}` : `/product/${id}`);
  };

  if (isLoading || !id) {
    return <BasketCardSkeleton />;
  }

  return (
    <div className={styles.basketCard}>
      <div onClick={handleProductClick} style={{ cursor: 'pointer', width: '100%' }}>
        <ProductThumbnailImage
          imageUrl={imageUrl}
          thumbnailUrl={thumbnailUrl}
          tab={tab}
          alilm={alilm}
          card={'thin'}
          counts={waitingCount}
          id={id}
          ifsent={messageStatus}
          borderRadius={borderRadius}
        />
      </div>
      {tab === 'home' && (
        <button onClick={handleWaitTogetherButtonClick} className={styles.waitTogetherButton}>
          <Icon icon="UserTwoPerson" width={12} height={12} />
          함께 기다리기
        </button>
      )}
      <div>
        {firstCategory && (
          <div onClick={handleProductClick} className={styles.productInfo}>
            <BasketBadge>{firstCategory}</BasketBadge>
            <p className={styles.name}>{name}</p>
            <p className={styles.options}>{description}</p>
          </div>
        )}
        {/* {tab && <WaitingCounts counts={waitingCount} />} */}

        {tab === 'my-basket' && <DeleteProductBtn id={id} name={name} />}
      </div>
    </div>
  );
};

export default ProductCard;
