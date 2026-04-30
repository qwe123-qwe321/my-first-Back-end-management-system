// 用户数据校验Schema（Zod）：定义用户表单的字段验证规则（姓名、邮箱、年龄、电话等），提供类型安全的表单校验
import { z } from 'zod';

export const userFormSchema = z.object({
  name: z.string().min(2, '姓名至少2个字符'),
  email: z.string().email('请输入有效的邮箱'),
  role: z.enum(['admin', 'editor', 'user']),
  status: z.enum(['active', 'inactive']),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
