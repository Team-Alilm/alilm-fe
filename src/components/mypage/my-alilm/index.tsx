import Flex from '@/components/design-system/flex';

import { alilmInfo, alilmNum, alilmText, container, myAlilm } from './index.css';

interface MyAlilmProps {
  alilmCount?: number;
  basketCount?: number;
}

const MyAlilm = ({ alilmCount, basketCount }: MyAlilmProps) => {
  return (
    <div className={container}>
      <div className={myAlilm}>
        <Flex justify="space-evenly" align="center">
          <section className={alilmInfo}>
            <p className={alilmNum}>{basketCount || '-'}</p>
            <p className={alilmText}>내가 등록한 상품</p>
          </section>
          <section className={alilmInfo}>
            <p className={alilmNum}>{alilmCount || '-'}</p>
            <p className={alilmText}>내가 받은 알림</p>
          </section>
        </Flex>
      </div>
    </div>
  );
};

export default MyAlilm;
