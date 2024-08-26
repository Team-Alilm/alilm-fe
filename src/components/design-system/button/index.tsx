import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import * as styles from './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: VoidFunction;
  disabled?: boolean;
  description?: ReactNode;
}

const Button = ({ children, onClick, disabled = false, description, ...props }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={styles.button({ disabled })}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Button;
