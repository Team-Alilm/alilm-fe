import { useEffect } from 'react';
import { useIntersection } from '@/hooks/common/use-intersection';
import { useGetBaskets } from '@/hooks/quries/use-get-baskets';

import BasketCard from '../basket-card';
import * as styles from './index.css';

const BasketCardList = () => {
  const { data: baskets, fetchNextPage, hasNextPage, isFetching } = useGetBaskets();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // 현재 스크롤 위치
      const windowHeight = window.innerHeight; // 창의 높이
      const documentHeight = document.body.scrollHeight; // 문서 전체 높이

      // 스크롤이 80% 이상 내려갔을 때
      if (scrollTop + windowHeight >= documentHeight * 0.8 && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasNextPage, isFetching, fetchNextPage]);

  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <div className={styles.basketCardList}>
      {baskets.map(basket => (
        <BasketCard key={basket.id} {...basket} />
      ))}
      {hasNextPage && <div ref={observeRef} />}
    </div>
  );
};

export default BasketCardList;
