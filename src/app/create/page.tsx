import Button from '@/components/design-system/button';
import Flex from '@/components/design-system/flex';
import Input from '@/components/design-system/input';
import Select from '@/components/design-system/select';

import * as styles from './index.css';

const CreatePage = () => {
  return (
    <div className={styles.createPage}>
      <p className={styles.title}>지금 재입고 등록을 해보세요!👇</p>
      <form className={styles.createForm}>
        <Flex align="flex-end" gap={8}>
          <Input label="URL 주소" />
          <Button style={{ width: '76px' }}>조회</Button>
        </Flex>
        <div className={styles.previewImage} />
        <Select label="상품 옵션1" options={[{ value: '안녕', label: '안녕' }]} />
        <Select label="상품 옵션1" options={[{ value: '안녕', label: '안녕' }]} />
        <Button
          description={
            <p className={styles.buttonDescription}>재입고 알림을 신청하면 홈으로 이동합니다.</p>
          }
        >
          재입고 알림 신청
        </Button>
      </form>
    </div>
  );
};

export default CreatePage;
