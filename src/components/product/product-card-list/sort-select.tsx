import { useMemo } from 'react';
import Select from '@/components/design-system/select';

import * as styles from './index.css';

type SortValue = 'WAITING_COUNT_DESC' | 'PRICE_ASC' | 'PRICE_DESC' | 'CREATED_DATE_DESC';

interface SortSelectProps {
  value: SortValue;
  onChange: (value: SortValue) => void;
}
const SORT_OPTIONS: { value: SortValue; label: string }[] = [
  {
    label: '함께 기다리기 많은 순',
    value: 'WAITING_COUNT_DESC',
  },
  {
    label: '낮은 가격순',
    value: 'PRICE_ASC',
  },
  {
    label: '높은 가격순',
    value: 'PRICE_DESC',
  },
  {
    label: '신상품순',
    value: 'CREATED_DATE_DESC',
  },
];

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  const options = useMemo(
    () =>
      SORT_OPTIONS.map(opt => ({
        value: opt.value,
        label: opt.label, // 여기서 스타일 적용은 못하지만 label 텍스트 기준
      })),
    []
  );

  return (
    <div className={styles.sortSelectWrapper}>
      <Select
        value={value}
        onChange={e => onChange(e.target.value as SortValue)}
        options={options}
        className={styles.sortSelect}
        // 필요시 추가 스타일
      />
    </div>
  );
};

export default SortSelect;
