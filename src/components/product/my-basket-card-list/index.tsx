import { useGetMyBaskets } from '@/hooks/queries/use-get-my-baskets';

import MyBasketCard from '../my-basket-card';
import ProductCard from '../product-card';
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
            <ProductCard key={myBasket.id} {...myBasket} tab="my-basket" />
          ))}
        </div>
      )}
      {type === 'mypage' && (
        <div className={cardListMypage}>
          {myBaskets?.map(myBasket => <MyBasketCard key={myBasket.id} {...myBasket} />)}
        </div>
      )}
    </>
  );
};

export default MyBasketCardList;
