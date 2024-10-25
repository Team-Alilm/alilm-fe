'use client';

import { useEffect, useState } from 'react';
import ProductOptionsForm from '@/components/create/product-options-form';
import Button from '@/components/design-system/button';
import ButtonInput from '@/components/design-system/button-input';
import usePostUrlCrawlingProduct from '@/hooks/mutations/use-post-url-crawling-product';
import {
  type RegisteredBasketsParams,
  useRegisteredBaskets,
} from '@/hooks/mutations/use-registered-baskets';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { useModalStore } from '@/store/use-modal-store';
import { ERROR_CODE, ERROR_MESSAGES, type ErrorCode } from '@/utils/error-code';

import * as styles from './index.css';

export type CreateFormValue = RegisteredBasketsParams;

const CreatePage = () => {
  const { mutate: registeredBaskets } = useRegisteredBaskets();
  const [url, setUrl] = useState('');
  const [showProductsOptionsForm, setShowProductsOptionsForm] = useState(false);
  const [createForm, setCreateForm] = useState<CreateFormValue | null>(null);
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const openLoginModal = useLoginModalStore(state => state.openLoginModal);
  const onOpen = useModalStore(state => state.onOpen);

  const {
    mutate: fetchProduct,
    data: product,
    isPending,
    isError,
    error,
  } = usePostUrlCrawlingProduct();

  const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleUrlInputButtonClick = () => {
    setShowProductsOptionsForm(true);
    fetchProduct({ url });
  };

  const handleCreateFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (createForm) {
      registeredBaskets(createForm);
    }
  };

  if (!accessToken) {
    openLoginModal();
  }

  const renderErrorMessage = (errorCode: ErrorCode) => {
    const message = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES[ERROR_CODE.INTERNAL_SERVER_ERROR];
    const invalidUrl = error?.response?.data.error;

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

  useEffect(() => {
    if (isError) {
      const errorCode =
        ((error as Error)?.message as ErrorCode) || ERROR_CODE.INTERNAL_SERVER_ERROR;
      renderErrorMessage(errorCode);
    }
  }, [isError, error]);

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
        {showProductsOptionsForm && (
          <ProductOptionsForm
            product={product}
            isPending={isPending}
            setCreateForm={setCreateForm}
          />
        )}
        <Button
          style={{ width: '100%', cursor: 'pointer' }}
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
