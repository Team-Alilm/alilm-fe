'use client';

import { useEffect, useRef, useState } from 'react';
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
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
      <div className={styles.wrapper} ref={dropdownRef}>
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
                  width={24}
                  height={24}
                  className={styles.logoImage}
                />
                <span>{image.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className={styles.createPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.shopLinksWrapper}>
              {LOGO_IMAGES.map(image => (
                <a
                  key={image.name}
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shopLink}
                >
                  <Image
                    src={`/images/${image.fileName}`}
                    alt={image.name}
                    width={32}
                    height={32}
                    className={styles.logoImage}
                  />
                  <span>{image.name}</span>
                </a>
              ))}
            </div>
            <h1 className={styles.title}>재입고 알림 신청</h1>
            <p className={styles.subtitle}>
              무신사 · 29CM · 지그재그 상품의
              <br />
              재입고 알림을 간편하게 등록하세요
            </p>
          </div>

          <form onSubmit={handleCreateFormSubmit} className={styles.createForm}>
            <div className={styles.urlInputSection}>
              <ButtonInput
                name="url"
                onChange={handleUrlInputChange}
                onButtonClick={handleUrlInputButtonClick}
                isButtonDisabled={!url}
                label="상품 URL"
                buttonText="조회"
                placeholder="상품 URL을 입력해주세요"
              />
            </div>
            {showProductsOptionsForm && (
              <ProductOptionsForm url={url} setCreateForm={setCreateForm} />
            )}
            <Button
              style={{ width: '100%', cursor: 'pointer' }}
              description={
                <span className={styles.buttonDescription}>
                  재입고 알림을 신청하면 홈으로 이동합니다
                </span>
              }
            >
              재입고 알림 신청
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
