import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { type Basket } from '@/types/basket';

import BasketBadge from '../basket-badge';
import * as styles from './index.css';

type BasketProps = Basket;

const BasketCard = ({
  id,
  number,
  name,
  brand,
  imageUrl,
  category,
  price,
  option1,
  option2,
  option3,
  waitingCount,
}: BasketProps) => {
  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const handleWaitToggetherButtonClick = () => {
    copyBasketsMutate(id);
  };

  return (
    <div className={styles.basketCard}>
      <img
        src="https://s3-alpha-sig.figma.com/img/feea/01e0/1dc0621ae619c689c5bf04ed17865722?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNQuc4uiIcS3SS-w1okUbT1XgGHL0r5rQBCzIaOCCUyaq7vWrpiEnbrK8adn5A8lcm8Uyn6jUcVMG756i1bg~1jp3XBe21mB87kXYvHD4~RDZwJFwv3KkGQjNhVkItGyfkACayqtg-Hv3uCskIl8WJ4L8A4uCRXKQvaXDQaXHpPYWjagmcUNgIEMeeSwjObiocG68OCkmxu0Z0X20RX-NI3GpPvvtwLtAbaK37xXJTukHfv8KuRPok8ef-u9aL2Dcmq~A5LXgye8pEXSlRV6VsGEvp9V2iYqOA~fDAhC4DJbMMIPKACR3Trzr08BCt1QLRlcpVtqQN91Mvw4dMw~TA__"
        className={styles.thumbnailImage}
        alt="Basket Thubnail"
      />
      <div className={styles.basketBadgeList}>
        <BasketBadge>상의</BasketBadge>
      </div>
      <p className={styles.description}>요즘 인기 있는 반팔인데 함께 기다리기 눌러서 같이사요~</p>
      <p className={styles.options}>VGT Black / Size : M</p>
      <button onClick={handleWaitToggetherButtonClick} className={styles.waitTogetherButton}>
        함께 기다리기
      </button>
    </div>
  );
};

export default BasketCard;
