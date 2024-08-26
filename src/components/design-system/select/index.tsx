import { type SelectHTMLAttributes } from 'react';
import Image from 'next/image';

import Flex from '../flex';
import * as styles from './index.css';

type SelectOption = { value: string; label: string };

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}

const Select = ({ label, options, ...props }: SelectProps) => {
  return (
    <Flex direction="column" gap={8}>
      {label && <p className={styles.label}>{label}</p>}
      <Flex align="center" style={{ position: 'relative' }}>
        <select className={styles.select} {...props}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Image
          src="/icons/chevron-down.svg"
          className={styles.chevronDownIcon}
          alt="chevron-down"
          width={20}
          height={20}
        />
      </Flex>
    </Flex>
  );
};

export default Select;
