import Button from '@/components/design-system/button';
import ButtonInput from '@/components/design-system/button-input';
import Select from '@/components/design-system/select';

import * as styles from './index.css';

const CreatePage = () => {
  return (
    <div className={styles.createPage}>
      <p className={styles.title}>지금 재입고 등록을 해보세요!👇</p>
      <form className={styles.createForm}>
        <ButtonInput label="URL 주소" buttonText="조회" />
        <div className={styles.previewImage} />
        <Select label="상품 옵션1" options={[{ value: '안녕', label: '안녕' }]} />
        <Select label="상품 옵션1" options={[{ value: '안녕', label: '안녕' }]} />
        <Button
          style={{ width: '100%' }}
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
