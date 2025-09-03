/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useRouter } from 'next/navigation';
import ProductThumbnailImage from '@/components/product/product-thumbnail';
import { useGetRelatedProducts } from '@/hooks/queries/use-get-related-products';
import { type Product } from '@/types/basket';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface RelatedProductListProps {
  productId: Product['id'];
}

const RelatedProductList = ({ productId }: RelatedProductListProps) => {
  const { data } = useGetRelatedProducts(productId);

  const relatedProducts = data?.data;

  const router = useRouter();

  const handleProductClick = (relatedProductId: number) => {
    router.push(`/product/${relatedProductId}`);
  };

  if (!relatedProducts) return;

  return (
    <div className={styles.cardList}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        style={{ paddingLeft: '2rem', paddingRight: '1rem' }}
      >
        {relatedProducts.similarProductList.map(product => (
          <SwiperSlide key={product.productId} className={styles.cardWrapper}>
            <div className={styles.basketCard}>
              <div
                onClick={() => handleProductClick(product.productId)}
                style={{ cursor: 'pointer', width: '100%' }}
              >
                <ProductThumbnailImage
                  thumbnailUrl={product.thumbnailUrl}
                  card="thin"
                  borderRadius={8}
                />
              </div>
              <div>
                <div
                  onClick={() => handleProductClick(product.productId)}
                  className={styles.productInfo}
                >
                  <p className={styles.name}>{product.name}</p>
                  <p className={styles.options}>{product.brand}</p>
                </div>
              </div>
            </div>{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProductList;
