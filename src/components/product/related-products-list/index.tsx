import { useGetRelatedProducts } from '@/hooks/queries/use-get-related-products';
import { type Product } from '@/types/basket';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from '../product-card';
import * as styles from './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface RelatedProductListProps {
  productId: Product['id'];
}

const RelatedProductList = ({ productId }: RelatedProductListProps) => {
  const { data: relatedProducts } = useGetRelatedProducts(productId);
  console.log(relatedProducts);

  return (
    <div className={styles.cardList}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        style={{ paddingLeft: '2rem', paddingRight: '1rem' }}
      >
        {relatedProducts?.relatedProductList.map(product => (
          <SwiperSlide key={product.id} className={styles.cardWrapper}>
            <ProductCard {...product} key={product.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProductList;
