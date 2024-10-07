import * as styles from './index.css';

export default function BasketCardSkeleton() {
  return (
    <div className={styles.basketCard}>
      <div className={styles.imageWrapper}>
        <div className={styles.skeletonThumbnailImage} />
      </div>
      <div>
        <div className={styles.skeletonBadge} />
        <div className={styles.skeletonName} />
        <div className={styles.skeletonOptions} />
        <div className={styles.skeletonWaitingCount} />
        <div className={styles.skeletonButton} />
      </div>
    </div>
  );
}
