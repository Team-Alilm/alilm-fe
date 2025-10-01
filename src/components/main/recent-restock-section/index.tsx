'use client';

import { useRouter } from 'next/navigation';
import ProductThumbnailImage from '@/components/product/product-thumbnail';
import { type RestockItem, useGetRestockResponse } from '@/hooks/queries/use-get-restock-items';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './index.css';

const RecentRestockSection = () => {
  const router = useRouter();
  const { data: restockResponse } = useGetRestockResponse();

  const handleProductClick = (item: RestockItem) => {
    router.push(`/product/${item.productId}`);
  };

  if (!restockResponse?.recentlyRestockedProductResponseList) {
    return null;
  }

  const formatPrice = (price?: number) => {
    if (!price) return '가격 미정';

    return `${price.toLocaleString()}원`;
  };

  return (
    <div className={styles.firstModule}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.restock}>최근 재입고된 상품</h3>
        <p className={styles.sectionSubtitle}>인기 상품을 빠르게 만나보세요</p>
      </div>

      <Swiper
        slidesPerView="auto"
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        modules={[Pagination, Mousewheel, Autoplay]}
        style={{ padding: '0 0 2rem 2rem', background: 'transparent' }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {restockResponse.recentlyRestockedProductResponseList.map((item, index) => (
          <SwiperSlide key={item.productId} className={styles.cardWrapper}>
            <button
              style={{ all: 'unset', cursor: 'pointer' }}
              onClick={() => handleProductClick(item)}
            >
              <div className={styles.topBadge}>{index + 1}</div>
              <ProductThumbnailImage card="slide" thumbnailUrl={item.thumbnailUrl} />
              <div className={styles.productInfo}>
                <div className={styles.brandName}>{item.brand}</div>
                <div className={styles.productName}>{item.name}</div>
                <div className={styles.price}>{formatPrice(item.price)}</div>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentRestockSection;
