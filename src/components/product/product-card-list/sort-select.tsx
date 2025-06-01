import { useState } from 'react';
import Image from 'next/image';

import * as styles from './index.css';

type SortValue = 'WAITING_COUNT_DESC' | 'PRICE_ASC' | 'PRICE_DESC' | 'CREATED_DATE_DESC';

interface SortSelectProps {
  value: SortValue;
  onChange: (value: SortValue) => void;
}
const SORT_OPTIONS = [
  {
    label: '함께 기다리기 많은 순',
    value: 'WAITING_COUNT_DESC',
    icon: '/icons/interaction=default, type=함께 기다리기 많은 순.png',
  },
  {
    label: '낮은 가격순',
    value: 'PRICE_ASC',
    icon: '/icons/interaction=default, type=낮은 가격 순.png',
  },
  {
    label: '높은 가격순',
    value: 'PRICE_DESC',
    icon: '/icons/interaction=default, type=높은 가격 순.png',
  },
  {
    label: '신상품순',
    value: 'CREATED_DATE_DESC',
    icon: '/icons/interaction=default, type=최신순.png',
  },
] as const;

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  const [open, setOpen] = useState(false);
  const selected = SORT_OPTIONS.find(opt => opt.value === value);

  return (
    <div className={styles.sortSelectWrapper}>
      <button className={styles.sortButton} onClick={() => setOpen(prev => !prev)}>
        {selected && <Image src={selected.icon} alt={''} width={120} height={30} />}
      </button>

      {open && (
        <div className={styles.dropdown}>
          {SORT_OPTIONS.map(option => (
            <button
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <Image src={option.icon} alt={option.label} width={120} height={30} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortSelect;
