import { type HTMLAttributes } from 'react';

import Flex from '../flex';
import * as styles from './index.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <Flex direction="column" gap={8}>
      {label && <p className={styles.label}>{label}</p>}
      <input className={styles.input} {...props} />
    </Flex>
  );
};

export default Input;
