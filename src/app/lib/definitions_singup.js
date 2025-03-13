import { z } from 'zod'

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Имя должно состоять не менее чем из 2 символов.' })
    .trim(),
  email: z.string().email({ message: 'Пожалуйста, введите действительный адрес электронной почты.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Длина должна быть не менее 8 символов' })
    .regex(/[a-zA-Z]/, { message: 'Содержать хотя бы одну букву.' })
    .regex(/[0-9]/, { message: 'Содержит по крайней мере одно число.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Содержит по крайней мере один специальный символ.',
    })
    .trim(),
    password_confirmation: z
    .string()
    .min(8, { message: 'Длина должна быть не менее 8 символов' })
    .regex(/[a-zA-Z]/, { message: 'Содержать хотя бы одну букву.' })
    .regex(/[0-9]/, { message: 'Содержит по крайней мере одно число.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Содержит по крайней мере один специальный символ.',
    })
    .trim(),

}).superRefine(({ password_confirmation, password }, ctx) => {
  if (password_confirmation !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Пароли не совпадают",
      path: ['password_confirmation']
    });
  }
});