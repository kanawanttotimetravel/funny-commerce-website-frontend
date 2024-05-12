'use server'
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import {z} from 'zod'
import axios from "axios";

const SignUpFormSchema = z.object({
  name: z
  .string()
  .min(2, { message: 'Be at least 2 characters long.' })
  .trim(),

  password: z
  .string()
  .min(8, { message: 'Be at least 8 characters long' })
  .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
  .regex(/[0-9]/, { message: 'Contain at least one number.' })
  .trim(),

  confirmPassword: z
  .string()
  .trim()
}).refine((schema) => {
  return schema.password === schema.confirmPassword
}, {message: `Password doesn't match!`})

const signUp = async (state, formData) => {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  })
  if (!validatedFields.success) {
    console.log('You failed!')
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      formErrors: validatedFields.error.flatten().formErrors
    }
  }
  console.log(validatedFields.data)
  axios({
    url: 'http://localhost:5000/register',
    method: 'post',
    data: {
      name: validatedFields.data.name,
      password: validatedFields.data.password
    }
  }).then(() => {
    console.log('Request sent!')
  }, () => {
    console.log('FAILURE!')
  })
  console.log('Success!')
  return validatedFields;
}
export default signUp