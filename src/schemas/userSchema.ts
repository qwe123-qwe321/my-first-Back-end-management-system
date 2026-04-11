import { z } from 'zod';

export const userFormSchema = z.object({
  name: z.string().min(2, '姓名至少2个字符'),
  email: z.string().email('请输入有效的邮箱'),
  role: z.enum(['admin', 'editor', 'user']),
  status: z.enum(['active', 'inactive']),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
