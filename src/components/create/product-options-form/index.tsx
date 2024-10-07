import { type Dispatch, type SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import Select from '@/components/design-system/select';
import usePostUrlCrawlingProduct from '@/hooks/mutations/use-post-url-crawling-product';
import { type RegisteredBasketsParams } from '@/hooks/mutations/use-registered-baskets';
import { ERROR_CODE, ERROR_MESSAGES, type ErrorCode } from '@/utils/error-code';

import * as styles from './index.css';

interface ProductOptionsFormProps {
  url: string;
  setCreateForm: Dispatch<SetStateAction<RegisteredBasketsParams | null>>;
}

const ProductOptionsForm = ({ url, setCreateForm }: ProductOptionsFormProps) => {
  const {
    mutate: fetchProduct,
    data: product,
    isPending,
    isError,
    error,
  } = usePostUrlCrawlingProduct();

  useEffect(() => {
    fetchProduct({ url });
  }, [fetchProduct, url]);

  useEffect(() => {
    if (product) {
      setCreateForm({
        ...product,
        firstOption: product.firstOptions[0] ?? '',
        secondOption: product.secondOptions[0] ?? null,
        thirdOption: product.thirdOptions[0] ?? null,
      });
    }
  }, [product, setCreateForm]);

  const handleOptionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCreateForm(prev => (prev ? { ...prev, [name]: value } : null));
  };

  const renderErrorMessage = (errorCode: ErrorCode) => {
    const message = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES[ERROR_CODE.INTERNAL_SERVER_ERROR];

    return <p>{message}</p>;
  };

  if (isPending) return <p>상품 정보를 불러오는 중입니다...</p>;
  if (isError) {
    const errorCode = ((error as Error)?.message as ErrorCode) || ERROR_CODE.INTERNAL_SERVER_ERROR;

    return renderErrorMessage(errorCode);
  }

  if (!product) return null;

  return (
    <>
      <Image
        src={product.imageUrl}
        className={styles.previewImage}
        alt="Product Preview"
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
