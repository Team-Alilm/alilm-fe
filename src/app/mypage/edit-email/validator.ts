import { REG_EXP } from '@/constants';
import z from 'zod';

export const emailSchema = z.object({
  newEmail: z.string().regex(REG_EXP.email, '이메일 형식을 다시 확인해주세요.'),
});
