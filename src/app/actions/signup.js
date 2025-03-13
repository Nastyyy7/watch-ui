"use server";
import { SignupFormSchema } from '@/app/lib/definitions_singup'
 
export async function signup(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    password_confirmation: formData.get('password_confirmation'),

  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
    const uri = new URL("http://127.0.0.1:8000/api/v1/register/");

  const response = await fetch(uri, {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(validatedFields.data),
  });



  if(response.ok) {
    return {
      message:  'Вы успешно зарегестрированы. Зайдите на почту!',
    }
  } else {
    const body = await response.json()
    return {
      errors:  body.errors,
    }
    // console.log(JSON.stringify(validatedFields));
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log("no ok");
  }
  // Call the provider or db to create a user...
}