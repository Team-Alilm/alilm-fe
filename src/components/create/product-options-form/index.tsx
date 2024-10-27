import { type Dispatch, type SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import Select from '@/components/design-system/select';
import { type UsePostUrlCrawlingProductResponse } from '@/hooks/mutations/use-post-url-crawling-product';
import { type RegisteredBasketsParams } from '@/hooks/mutations/use-registered-baskets';

import * as styles from './index.css';

interface ProductOptionsFormProps {
  product?: UsePostUrlCrawlingProductResponse;
  isPending: boolean;
  setCreateForm: Dispatch<SetStateAction<RegisteredBasketsParams | null>>;
}

const ProductOptionsForm = ({ product, isPending, setCreateForm }: ProductOptionsFormProps) => {
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

  if (isPending) return <p className={styles.pending}>상품 정보를 불러오는 중입니다...</p>;

  if (!product) return null;

  return (
    <>
      <Image
        src={product.imageUrl}
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
