/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDeleteBasket } from '@/hooks/mutations/use-delete-basket';
import { useModalStore } from '@/store/use-modal-store';
import { type MyBasket } from '@/types/basket';

import { BasketBadge } from '../basket-badge';
import WaitingCounts from '../waiting-counts';
import * as styles from './index.css';

type MyBasketProps = MyBasket;

const MyBasketCard = ({
  id,
  productId,
  name,
  brand,
  imageUrl,
  category,
  firstOption,
  secondOption,
  thirdOption,
  waitingCount,
}: MyBasketProps) => {
  const description = `${brand}${firstOption ? ` / ${firstOption}` : ''}${secondOption ? ` / ${secondOption}` : ''}${thirdOption ? ` / ${thirdOption}` : ''}`;

  const { mutate: deleteBasket } = useDeleteBasket();

  const onOpen = useModalStore(state => state.onOpen);

  const handleDeleteBtn = () => {
    onOpen({
      modalType: 'confirm',
      title: '상품을 삭제하시겠습니까?',
      description: name,
      onClick: () => deleteBasket(id),
      mainBtnText: '삭제',
    });
  };

  const router = useRouter();

  const openProductDetail = () => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className={styles.myBasketCard}>
      <Image
        src={imageUrl}
        className={styles.thumbnailImage}
        alt="Basket Thumbnail"
        width={200}
        height={200}
        style={{ width: '100%', height: 'auto', objectFit: 'cover', cursor: 'pointer' }}
        onClick={openProductDetail}
      />
      <div>
        <BasketBadge>{category}</BasketBadge>
        <p className={styles.name} onClick={openProductDetail}>
          {name}
        </p>
        <p className={styles.options}>{description}</p>
        <WaitingCounts counts={waitingCount} />
        <button className={styles.deleteBtn} onClick={handleDeleteBtn}>
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default MyBasketCard;
