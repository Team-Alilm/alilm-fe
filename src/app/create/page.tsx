'use client';

import { useState } from 'react';
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
  const [url, setUrl] = useState('');
  const [showProductsOptionsForm, setShowProductsOptionsForm] = useState(false);
  const [createForm, setCreateForm] = useState<CreateFormValue | null>(null);

  const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleUrlInputButtonClick = () => {
    setShowProductsOptionsForm(true);
  };

  const handleCreateFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (createForm) {
      registeredBaskets(createForm);
    }
  };

  return (
    <div className={styles.createPage}>
      <p className={styles.title}>지금 재입고 등록을 해보세요!👇</p>
      <form onSubmit={handleCreateFormSubmit} className={styles.createForm}>
        <ButtonInput
          name="url"
          onChange={handleUrlInputChange}
          onButtonClick={handleUrlInputButtonClick}
          isButtonDisabled={!url}
          label="URL 주소"
          buttonText="조회"
        />
        {showProductsOptionsForm && <ProductOptionsForm url={url} setCreateForm={setCreateForm} />}
        <Button
          style={{ width: '100%' }}
          disabled={!createForm?.firstOption}
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
