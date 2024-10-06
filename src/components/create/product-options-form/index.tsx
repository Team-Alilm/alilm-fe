import { type ChangeEvent, type Dispatch, type SetStateAction, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { type CreateFormValue } from '@/app/create/page';
import Select from '@/components/design-system/select';
import { useGetProductsCrawling } from '@/hooks/quries/use-get-products-crawling';
import { omit } from 'es-toolkit';

import * as styles from './index.css';

interface ProductOptionsFormProps {
  url: string;
  setCreateForm: Dispatch<SetStateAction<CreateFormValue>>;
}

const ProductOptionsForm = ({ url, setCreateForm }: ProductOptionsFormProps) => {
  const { data: productsCrawling } = useGetProductsCrawling(url);
  const [firstOptions, secondOptions, thirdOptions] = useMemo(() => {
    const formatOptions = (options: string[]) =>
      options.map(option => ({ label: option, value: option }));

    return [
      formatOptions(productsCrawling.firstOptions),
      formatOptions(productsCrawling.secondOptions),
      formatOptions(productsCrawling.thirdOptions),
    ];
  }, [productsCrawling]);

  const handleOptionsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCreateForm(prevCreateForm => ({ ...prevCreateForm, [name]: value }));
  };

  useEffect(() => {
    const omitedProductsCrawling = omit(productsCrawling, [
      'firstOptions',
      'thirdOptions',
      'secondOptions',
    ]);

    setCreateForm(prevCreateForm => ({
      ...prevCreateForm,
      ...omitedProductsCrawling,
      firstOption: firstOptions[0].value,
      secondOption: secondOptions[0]?.value ?? null,
      thirdOption: thirdOptions[0]?.value ?? null,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsCrawling, url]);

  return (
    <>
      <Image
        src={productsCrawling.imageUrl}
        className={styles.previewImage}
        alt="Product Preview"
        width={800}
        height={800}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
      />
      {isNotEmptyArray(firstOptions) && (
        <Select
          onChange={handleOptionsChange}
          name="firstOption"
          label="상품 옵션1"
          options={firstOptions}
        />
      )}
      {isNotEmptyArray(secondOptions) && (
        <Select
          onChange={handleOptionsChange}
          name="secondOption"
          label="상품 옵션2"
          options={secondOptions}
        />
      )}
      {isNotEmptyArray(thirdOptions) && (
        <Select
          onChange={handleOptionsChange}
          name="thirdOption"
          label="상품 옵션3"
          options={thirdOptions}
        />
      )}
    </>
  );
};

export default ProductOptionsForm;

function isNotEmptyArray(arr: unknown[]) {
  return JSON.stringify(arr) !== '[]';
}
