'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PRODUCTS_CATEGORIES } from '@/components/product/product-card-list';

import * as styles from './index.css';

const SORT_OPTIONS = [
  { label: '대기자 많은순', value: 'WAITING_COUNT_DESC' },
  { label: '최신순', value: 'CREATED_AT_DESC' },
  { label: '가격 낮은순', value: 'PRICE_ASC' },
  { label: '가격 높은순', value: 'PRICE_DESC' },
];

const ProductsFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');

  const currentCategory = searchParams.get('category') || '';
  const currentSort = searchParams.get('sort') || 'WAITING_COUNT_DESC';

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sort);
    router.push(`/products?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchValue.trim()) {
      params.set('search', searchValue.trim());
    } else {
      params.delete('search');
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="상품명으로 검색하세요"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          검색
        </button>
      </form>

      <div className={styles.filterSection}>
        <div className={styles.categoryFilter}>
          {PRODUCTS_CATEGORIES.map(category => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`${styles.categoryButton} ${
                currentCategory === category.value ? styles.active : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.sortFilter}>
          {SORT_OPTIONS.map(option => (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              className={`${styles.sortButton} ${currentSort === option.value ? styles.active : ''}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
