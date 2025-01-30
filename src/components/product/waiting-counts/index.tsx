import Icon from '@/components/icons';

import { waitingCount, waitingCountStrong } from './index.css';

interface WaitingCountsProps {
  counts?: number;
}

const WaitingCounts = ({ counts }: WaitingCountsProps) => {
  return (
    <div className={waitingCount}>
      <Icon icon="UserTwoPerson" width={12} height={12} />
      함께 기다리는 사람 <span className={waitingCountStrong}>{counts || 0}</span>
    </div>
  );
};

export default WaitingCounts;
