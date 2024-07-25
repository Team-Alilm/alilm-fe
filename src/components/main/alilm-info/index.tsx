import Flex from '@/components/design-system/flex';

import * as styles from './index.css';

const AlilmInfo = () => {
  return (
    <div className={styles.alilmInfo}>
      <Flex direction="column">
        <p className={styles.title}>현재까지 누적 재입고 알림 등록 수</p>
        <p className={styles.figure}>50,000건</p>
      </Flex>
      <div className={styles.divider} />
      <Flex direction="column">
        <p className={styles.title}>오늘 재입고 알림 받은 사용자 수</p>
        <p className={styles.figure}>40명</p>
      </Flex>
    </div>
  );
};

export default AlilmInfo;
