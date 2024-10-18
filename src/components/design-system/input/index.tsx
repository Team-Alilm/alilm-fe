import { forwardRef, type InputHTMLAttributes } from 'react';

import Flex from '../flex';
import * as styles from './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <Flex direction="column" gap={8} style={{ flex: '1' }}>
      {label && <p className={styles.label}>{label}</p>}
      <input className={styles.input} {...props} ref={ref} />
    </Flex>
  );
});

export default Input;
