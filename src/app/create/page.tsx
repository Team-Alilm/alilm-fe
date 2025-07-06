'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductOptionsForm from '@/components/create/product-options-form';
import Button from '@/components/design-system/button';
import ButtonInput from '@/components/design-system/button-input';
import {
  type RegisteredBasketsParams,
  useRegisteredBaskets,
} from '@/hooks/mutations/use-registered-baskets';
import { PRODUCTS_CRAWLING_QUERY_KEY } from '@/hooks/queries/use-get-products-crawling';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import { useLoginModalStore } from '@/store/use-login-modal-store';
import { useQueryClient } from '@tanstack/react-query';

import * as styles from './index.css';

export type CreateFormValue = RegisteredBasketsParams;

const CreatePage = () => {
  const queryClient = useQueryClient();
  const { mutate: registeredBaskets } = useRegisteredBaskets();
  const [url, setUrl] = useState('');
  const [showProductsOptionsForm, setShowProductsOptionsForm] = useState(false);
  const [createForm, setCreateForm] = useState<CreateFormValue | null>(null);
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const [isOpen, setIsOpen] = useState(false);

  const openLoginModal = useLoginModalStore(state => state.openLoginModal);

  const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleUrlInputButtonClick = () => {
    setShowProductsOptionsForm(true);
    queryClient.invalidateQueries({ queryKey: [PRODUCTS_CRAWLING_QUERY_KEY] });
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

  const LOGO_IMAGES = [
    { name: '무신사', fileName: 'musinsa-logo.svg', link: 'http://www.musinsa.com/' },
    { name: '29CM', fileName: '29cm-logo.svg', link: 'https://29cm.co.kr/' },
    { name: '지그재그', fileName: 'zigzag-logo.svg', link: 'http://www.zigzag.com/' },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.header} onClick={() => setIsOpen(prev => !prev)}>
          쇼핑몰 바로가기
        </button>

        {isOpen && (
          <div className={styles.dropdown}>
            {LOGO_IMAGES.map(image => (
              <a
                key={image.name}
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.dropdownItem}
              >
                <Image
                  src={`/images/${image.fileName}`}
                  alt={image.name}
                  width={20}
                  height={20}
                  className={styles.logoImage}
                />
                <span style={{ paddingBottom: '2px' }}>{image.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className={styles.createPage}>
        <div className={styles.logoImageWrapper}>
          {LOGO_IMAGES.map(image => (
            <Image
              key={image.name}
              src={`/images/${image.fileName}`}
              alt="My Icon"
              width={50}
              height={50}
              className={styles.logoImage}
            />
          ))}
        </div>

        <p className={styles.title}>
          무신사/29CM/지그재그 상품,
          <br /> 지금 재입고 등록을 해보세요!
        </p>
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
            <ProductOptionsForm url={url} setCreateForm={setCreateForm} />
          )}
          <Button
            style={{ width: '100%', cursor: 'pointer' }}
            description={
              <p className={styles.buttonDescription}>재입고 알림을 신청하면 홈으로 이동합니다.</p>
            }
          >
            재입고 알림 신청
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreatePage;
