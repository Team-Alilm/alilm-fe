'use client';

import Image from 'next/image';
import Button from '@/components/design-system/button';
import Icon from '@/components/icons';
import RelatedProductList from '@/components/product/related-products-list';
import { useCopyBaskets } from '@/hooks/mutations/use-copy-baskets';
import { useGetProductInfo } from '@/hooks/queries/use-get-product-info';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type PaginationOptions } from 'swiper/types';

import * as styles from './index.css';

import 'swiper/css';
import 'swiper/css/pagination';

const paginationConfig: PaginationOptions = {
  type: 'fraction',
  renderFraction: (current, total) => `
  <div class="${styles.swiperPaginationWrapper}">
    <div class="${styles.swiperPaginationFraction}">
      <span class="${styles.swiperPaginationCurrent} ${current}"></span>
      <span class="${styles.swiperPaginationSlash}"> / </span> 
      <span class="${styles.swiperPaginationTotal} ${total}"></span>
    </div>
  </div>
    `,
};

interface ProductDetailProps {
  params: { id: number };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const { data: productInfo } = useGetProductInfo(params.id);
  const { mutate: copyBasketsMutate } = useCopyBaskets();

  const handleWaitTogetherButtonClick = () => {
    copyBasketsMutate(params.id);
  };
  if (!productInfo) return;

  const imageContents = [productInfo.thumbnailUrl, ...productInfo.imageUrlList];

  const handleGoToBuyBtn = () => {
    window.open(`https://www.musinsa.com/products/${productInfo.number}`);
  };

  return (
    productInfo && (
      <div>
        <div className={styles.productImage}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={paginationConfig}
            modules={[Navigation, Pagination]}
          >
            {imageContents.map((image, i) => (
              <SwiperSlide key={i}>
                <div>
                  <div>
                    <Image src={image} layout={'intrinsic'} alt={image} width={600} height={600} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
        <div className={styles.buttonSection}>
          <button className={styles.waitingTogetherBtn} onClick={handleWaitTogetherButtonClick}>
            <Icon icon="UserTwoPerson" width={16} height={16} />
            <span>함께 기다리기</span>
          </button>
          <div style={{ width: '65.16%' }}>
            <Button
              onClick={handleGoToBuyBtn}
              style={{ width: '100%', height: '5.1rem', borderRadius: '0.8rem' }}
            >
              상품 판매 사이트로 가기
            </Button>
          </div>
        </div>
        <div className={styles.listSection}>
          <p className={styles.listTitle}>관련 상품</p>
          <RelatedProductList productId={productInfo.id} />
        </div>
      </div>
    )
  );
};

export default ProductDetail;
