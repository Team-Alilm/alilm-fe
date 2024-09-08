'use client';

import Flex from '@/components/design-system/flex';
import { useGetNotificationsCount } from '@/hooks/quries/use-get-notifications-count';

import * as styles from './index.css';

const AlilmInfo = () => {
  const { data: notificationsCount } = useGetNotificationsCount();

  return (
    <div className={styles.alilmInfo}>
      <Flex direction="column">
        <p className={styles.title}>누적 재입고 알림</p>
        <p className={styles.figure}>{notificationsCount.allCount}건</p>
      </Flex>
      <Flex direction="column">
        <p className={styles.title}>오늘 재입고 알림</p>
        <p className={styles.figure}>{notificationsCount.dailyCount}명</p>
      </Flex>
    </div>
  );
};

export default AlilmInfo;
