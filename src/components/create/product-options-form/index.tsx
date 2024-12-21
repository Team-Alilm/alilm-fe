import { type Dispatch, type SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import Select from '@/components/design-system/select';
import { type RegisteredBasketsParams } from '@/hooks/mutations/use-registered-baskets';
import { useGetProductsCrawling } from '@/hooks/queries/use-get-products-crawling';
import { useModalStore } from '@/store/use-modal-store';
import { ERROR_CODE, ERROR_MESSAGES, type ErrorCode } from '@/utils/error-code';
import type { AxiosError } from 'axios';

import * as styles from './index.css';

interface ProductOptionsFormProps {
  url: string;
  setCreateForm: Dispatch<SetStateAction<RegisteredBasketsParams | null>>;
}

const ProductOptionsForm = ({ url, setCreateForm }: ProductOptionsFormProps) => {
  const onOpen = useModalStore(state => state.onOpen);

  const { data: product, isPending, isError, error } = useGetProductsCrawling(url);

  useEffect(() => {
    if (product) {
      const {
        firstOptions: _firstOptions,
        secondOptions: _secondOptions,
        ...restProduct
      } = product;

      setCreateForm({
        ...restProduct,
        imageUrlList:
          product.imageUrlList.length > 0 ? product.imageUrlList : [product.thumbnailUrl],
        firstOption: product.firstOptions[0] ?? '',
        secondOption: product.secondOptions[0] ?? null,
        thirdOption: product.thirdOptions[0] ?? null,
      });
    }
  }, [product, setCreateForm]);

  useEffect(() => {
    if (isError) {
      const errorCode =
        ((error as Error)?.message as ErrorCode) || ERROR_CODE.INTERNAL_SERVER_ERROR;
      renderErrorMessage(errorCode);
    }
  }, [isError, error]);

  const handleOptionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCreateForm(prev => (prev ? { ...prev, [name]: value } : null));
  };

  if (isPending) return <p className={styles.pending}>상품 정보를 불러오고 있어요...</p>;

  if (!product) return null;

  const renderErrorMessage = (errorCode: ErrorCode) => {
    const message = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES[ERROR_CODE.INTERNAL_SERVER_ERROR];
    const invalidUrl = (error as AxiosError)?.response?.data;

    if (invalidUrl === 'UNSUPPORTED_URL') {
      onOpen({
        modalType: 'alert',
        title: 'URL 주소를 다시 확인해주세요.',
        description: '무신사 상품만 등록할 수 있어요.',
      });
    } else {
      onOpen({ modalType: 'alert', title: message });
    }
  };

  return (
    <>
      <Image
        src={product.thumbnailUrl}
        alt="Product Preview"
        className={styles.previewImage}
        width={800}
        height={800}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
      />

      {renderSelect('firstOption', '상품 옵션1', product.firstOptions)}
      {renderSelect('secondOption', '상품 옵션2', product.secondOptions)}
      {renderSelect('thirdOption', '상품 옵션3', product.thirdOptions)}
    </>
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
