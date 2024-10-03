import React, { type ReactNode } from 'react';

import * as styles from './button.css';

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className={styles.buttonStyle}>{children}</button>;
}
