'use client';

import Button from '@/components/design-system/button';
import Input from '@/components/design-system/input';
import Spacer from '@/components/design-system/spacer';
import PageTitle from '@/components/mypage/page-title';
import { useUserStore } from '@/store/use-user-store';

import { editEmail } from './index.css';

const EditEmail = () => {
  const email = useUserStore(state => state.email);

  return (
    <div className={editEmail}>
      <PageTitle text="알림 받아 볼 이메일 변경" />
      <Input label="기존 이메일" value={email} disabled={true} />
      <Spacer height={24} />
      <Input label="변경할 이메일" />
      <Spacer height={24} />
      <Button style={{ width: '100%' }}>변경하기</Button>
    </div>
  );
};

export default EditEmail;
