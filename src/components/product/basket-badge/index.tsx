import { type PropsWithChildren } from 'react';

import * as styles from './index.css';

const BasketBadge = ({ children }: PropsWithChildren) => {
  return <span className={styles.basketBadge}>{children}</span>;
};

export default BasketBadge;
