import { type Dispatch, type SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import Select from '@/components/design-system/select';
import { type RegisteredBasketsParams } from '@/hooks/mutations/use-registered-baskets';
import { useGetProductsCrawling } from '@/hooks/queries/use-get-products-crawling';
import { useModalStore } from '@/store/use-modal-store';
import { ERROR_CODE } from '@/utils/error-code';

import * as styles from './index.css';

interface ProductOptionsFormProps {
  url: string;
  setCreateForm: Dispatch<SetStateAction<RegisteredBasketsParams | null>>;
}

const ProductOptionsForm = ({ url, setCreateForm }: ProductOptionsFormProps) => {
  const onOpen = useModalStore(state => state.onOpen);

  const { data, isPending, isError, error } = useGetProductsCrawling(url);

  const product = data?.data;

  useEffect(() => {
    if (product) {
      try {
        const {
          firstOptions: _firstOptions,
          secondOptions: _secondOptions,
          ...restProduct
        } = product;

        setCreateForm({
          ...restProduct,
          imageUrlList: product.imageUrlList,
          firstOption: product.firstOptions[0] ?? '',
          secondOption: product.secondOptions[0] ?? null,
          thirdOption: product.thirdOptions[0] ?? null,
        });
      } catch (err) {
        onOpen({ modalType: 'alert', title: '상품 정보를 처리하는 도중 문제가 발생했습니다.' });
      }
    }
  }, [product, setCreateForm, onOpen]);

  // 에러 메시지 텍스트 추출
  const extractErrorMessage = (rawErrorMessage: string): string => {
    const matches = Array.from(rawErrorMessage.matchAll(/default message \[(.*?)\]/g));

    if (matches.length > 0) {
      return matches[matches.length - 1][1];
    } else if (matches.length === 0) {
      return rawErrorMessage;
    }

    return ERROR_CODE.INTERNAL_SERVER_ERROR;
  };

  const renderErrorMessage = (errorMessage: string) => {
    if (errorMessage) {
      onOpen({ modalType: 'alert', title: errorMessage });
    } else {
      onOpen({ modalType: 'alert', title: error?.message || '' });
    }
  };

  useEffect(() => {
    if (isError && error) {
      const rawErrorMessage =
        (error instanceof Error && error.message) || ERROR_CODE.INTERNAL_SERVER_ERROR;

      const processedErrorMessage = extractErrorMessage(rawErrorMessage);

      renderErrorMessage(processedErrorMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error]);

  const handleOptionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCreateForm(prev => (prev ? { ...prev, [name]: value } : null));
  };

  if (isPending) {
    return (
      <div className={styles.productCard}>
        <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
        <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '40%' }} />
        <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '80%' }} />
        <div className={styles.pending}>
          <p className={styles.loadingText}>상품 정보를 불러오고 있어요...</p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className={styles.productCard}>
      <div className={styles.previewImageWrapper}>
        <Image
          src={product.thumbnailUrl}
          alt="Product Preview"
          className={styles.previewImage}
          width={800}
          height={800}
        />
      </div>
      <div className={styles.productInfo}>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.productName}>{product.name}</p>
      </div>
      <div className={styles.optionsSection}>
        {renderSelect('firstOption', '상품 옵션 1', product.firstOptions ?? [])}
        {renderSelect('secondOption', '상품 옵션 2', product.secondOptions ?? [])}
        {renderSelect('thirdOption', '상품 옵션 3', product.thirdOptions ?? [])}
      </div>
    </div>
  );

  function renderSelect(name: string, label: string, options: string[]) {
    if (options.length === 0) return null;

    return (
      <Select
        onChange={handleOptionsChange}
        name={name}
        label={label}
        options={options.map(option => ({ label: option, value: option }))}
      />
    );
  }
};

export default ProductOptionsForm;
