import { z } from 'zod'

export const AuthFormSchema = z.object({
  email: z.string().email({ message: 'Пожалуйста, введите действительный адрес электронной почты.' }).trim(),
  password: z
    .string()
    .trim(),
})