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

  return (
    <div className={styles.firstModule}>
      <h3 className={styles.restock}>최근 재입고된 상품</h3>

      <Swiper
        slidesPerView="auto"
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        modules={[Pagination, Mousewheel, Autoplay]}
        style={{ padding: '0 0 2rem 2rem' }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {restockResponse.recentlyRestockedProductResponseList.map((item, index) => (
          <SwiperSlide key={item.productId} className={styles.cardWrapper}>
            <button style={{ all: 'unset' }} onClick={() => handleProductClick(item)}>
              <div className={styles.topBadge}>{index + 1}</div>
              <ProductThumbnailImage card="slide" thumbnailUrl={item.thumbnailUrl} />
              <div className={styles.productInfo}>
                <div className={styles.brandName}>{item.brand}</div>
                <div className={styles.productName}>{item.name}</div>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentRestockSection;
