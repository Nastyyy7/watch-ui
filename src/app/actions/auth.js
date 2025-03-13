"use server";
import { AuthFormSchema } from '@/app/lib/definitions_auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function auth(state, formData) {
  // Validate form fields
  const validatedFields = AuthFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),

  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
    const uri = new URL("http://127.0.0.1:8000/api/v1/login/");

  const response = await fetch(uri, {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(validatedFields.data),
  });



  if(response.ok) {
    const data = await response.json()
    // const cookieStore = await cookies()
    cookies().set({
        name: 'User',
        value: data.token,
        httpOnly: true,
        path: '/',
        secure: false, //включить https и переключить на true
        maxAge: 60*60*24*7,
      })
      redirect('/account')
    // return {
    //   message:  data.token,
    // }
  } else {
    const body = await response.json()
    return {
      errors:  body.errors,
    }
}
}