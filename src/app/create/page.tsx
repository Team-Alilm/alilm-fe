'use client';

import { type ChangeEvent, type FormEvent, Suspense, useState } from 'react';
import ProductOptionsForm from '@/components/create/product-options-form';
import Button from '@/components/design-system/button';
import ButtonInput from '@/components/design-system/button-input';
import {
  type RegisteredBasketsParams,
  useRegisteredBaskets,
} from '@/hooks/mutations/use-registered-baskets';

import * as styles from './index.css';

export type CreateFormValue = RegisteredBasketsParams;

const CreatePage = () => {
  const { mutate: registeredBaskets } = useRegisteredBaskets();
  const [showProductsOptionsForm, setShowProductsOptionsForm] = useState(false);
  const [url, setUrl] = useState('');
  const [createForm, setCreateForm] = useState<CreateFormValue>({
    number: 0,
    name: '',
    brand: '',
    imageUrl: '',
    category: '',
    price: 0,
    store: '',
    firstOption: '',
    secondOption: null,
    thirdOption: null,
  });
  const isButtonDisabled = !createForm.firstOption;

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleCreateFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registeredBaskets(createForm);
  };

  return (
    <div className={styles.createPage}>
      <p className={styles.title}>지금 재입고 등록을 해보세요!👇</p>
      <form onSubmit={handleCreateFormSubmit} className={styles.createForm}>
        <ButtonInput
          name="url"
          onChange={handleUrlChange}
          onButtonClick={() => {
            setShowProductsOptionsForm(true);
          }}
          isButtonDisabled={!url}
          label="URL 주소"
          buttonText="조회"
        />
        {showProductsOptionsForm && !!url && (
          <Suspense>
            <ProductOptionsForm url={url} setCreateForm={setCreateForm} />
          </Suspense>
        )}
        <Button
          style={{ width: '100%' }}
          disabled={isButtonDisabled}
          description={
            <p className={styles.buttonDescription}>재입고 알림을 신청하면 홈으로 이동합니다.</p>
          }
        >
          재입고 알림 신청
        </Button>
      </form>
    </div>
  );
};

export default CreatePage;
