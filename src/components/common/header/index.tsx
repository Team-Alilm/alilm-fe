import Image from 'next/image';

import * as styles from './index.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/icons/logo.svg" width={86} height={26} alt="Logo" />
      <Image
        src="/icons/alilm.svg"
        className={styles.alilmIcon}
        width={24}
        height={24}
        alt="Alilm Icon"
      />
    </header>
  );
};

export default Header;
