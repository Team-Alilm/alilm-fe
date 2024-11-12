'use client';

import Image from 'next/image';
import Icon from '@/components/icons';
import RelatedProductList from '@/components/product/related-products-list';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { useGetProductInfo } from '@/hooks/queries/use-get-product-info';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductDetailProps {
  params: { id: number };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const { data: productInfo } = useGetProductInfo(params.id);
  const { mutate: copyBasketsMutate } = useCopyBaskets();

  console.log(productInfo);

  const handleWaitTogetherButtonClick = () => {
    copyBasketsMutate(params.id);
  };
  if (!productInfo) return;

  return (
    productInfo && (
      <div>
        <div className={styles.productImage}>
          {productInfo.imageUrlList[0] !== 'null' ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {productInfo.imageUrlList?.map((image, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <div>
                      <Image
                        src={image}
                        layout={'intrinsic'}
                        alt={image}
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Image
              src={productInfo.thumbnailUrl}
              layout={'intrinsic'}
              alt={productInfo.thumbnailUrl}
              width={800}
              height={800}
            />
          )}
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{productInfo.name}</p>
          <p className={styles.option}>
            {productInfo.brand} / {productInfo.firstOption}
            {productInfo.secondOption !== null && <span> / {productInfo.secondOption}</span>}
            {productInfo.thirdOption !== null && <span> / {productInfo.thirdOption}</span>}
          </p>
          <div>
            <p className={styles.option}>판매가</p>
            <p className={styles.price}>{productInfo.price.toLocaleString()}</p>
          </div>
        </div>
        <div>
          <button className={styles.waitingTogetherBtn} onClick={handleWaitTogetherButtonClick}>
            <Icon icon="UserTwoPerson" width={16} height={16} />
            <span>함께 기다리기</span>
          </button>
        </div>
        <div className={styles.listSection}>
          <p className={styles.listTitle}>관련 상품</p>
          <RelatedProductList />
        </div>
      </div>
    )
  );
};

export default ProductDetail;
