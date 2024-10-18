import { useGetMyBaskets } from '@/hooks/queries/use-get-my-baskets';

import BasketCard from '../basket-card';
import MyBasketCard from '../my-basket-card';
import { cardListHome, cardListMypage } from './index.css';

interface MyBasketCardListProps {
  type: 'home' | 'mypage';
}

const MyBasketCardList = ({ type }: MyBasketCardListProps) => {
  const { data: myBaskets } = useGetMyBaskets();

  return (
    <>
      {type === 'home' && (
        <div className={cardListHome}>
          {myBaskets?.map(myBasket => (
            <BasketCard key={myBasket.id} {...myBasket} tab="my-basket" />
          ))}
        </div>
      )}
      {type === 'mypage' && (
        <div className={cardListMypage}>
          {myBaskets.map(myBasket => (
            <MyBasketCard key={myBasket.id} {...myBasket} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyBasketCardList;
