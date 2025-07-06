import { useGetMyBaskets } from '@/hooks/queries/use-get-my-baskets';
import { BellRing } from 'lucide-react';

import MyBasketCard from '../my-basket-card';
import ProductCard from '../product-card';
import { cardListHome, cardListMypage, infoBox } from './index.css';

interface MyBasketCardListProps {
  type: 'home' | 'mypage';
}

const MyBasketCardList = ({ type }: MyBasketCardListProps) => {
  const { data: myBaskets } = useGetMyBaskets();

  const alilmedProducts = myBaskets?.filter(product => product.alilm);

  return (
    <>
      {alilmedProducts?.length ? (
        <div className={infoBox}>
          <BellRing stroke={'#707070'} width={13} />
          재입고 알림을 보낸 상품에 알림 표시를 해두었어요.
        </div>
      ) : null}
      {type === 'home' && (
        <div className={cardListHome}>
          {myBaskets?.map(myBasket => (
            <ProductCard key={myBasket.id} {...myBasket} tab="my-basket" />
          ))}
        </div>
      )}
      {type === 'mypage' && (
        <div className={cardListMypage}>
          {myBaskets?.map(myBasket => (
            <MyBasketCard key={myBasket.id} {...myBasket} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyBasketCardList;
