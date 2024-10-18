'use client';

import Button from '@/components/design-system/button';
import Input from '@/components/design-system/input';
import Spacer from '@/components/design-system/spacer';
import PageTitle from '@/components/mypage/page-title';
import { useEditEmail } from '@/hooks/mutations/use-post-email';
import { useUserStore } from '@/store/use-user-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { editEmail, invalidText } from './index.css';
import { emailSchema } from './validator';

interface EmailFormData {
  newEmail: string;
}

const EditEmail = () => {
  const { email, nickname } = useUserStore();
  const { mutate: editEmailPost } = useEditEmail();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: { newEmail: '' },
  });

  const onSubmit = (data: EmailFormData) => {
    editEmailPost({ email: data.newEmail, nickname });
  };

  return (
    <div className={editEmail}>
      <PageTitle text="알림 받아볼 이메일 변경" />
      <Input label="기존 이메일" value={email} disabled={true} />
      <Spacer height={24} />
      <Controller
        name="newEmail"
        control={control}
        render={({ field }) => (
          <>
            <Input label="변경할 이메일" {...field} placeholder="새로운 이메일을 입력하세요" />
            {errors.newEmail && <p className={invalidText}>{errors.newEmail.message}</p>}
          </>
        )}
      />
      <Spacer height={24} />
      <Button style={{ width: '100%' }} onClick={handleSubmit(onSubmit)}>
        변경하기
      </Button>
    </div>
  );
};

export default EditEmail;
