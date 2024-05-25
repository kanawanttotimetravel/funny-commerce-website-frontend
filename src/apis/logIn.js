'use server'
import 'dotenv/config'
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import {z} from 'zod'
import axios from "axios";
import {createSession} from "@/apis/session";
import {redirect} from "next/navigation";

const SignUpFormSchema = z.object({
  name: z
  .string()
  .trim(),

  password: z
  .string()
  .trim(),

})
const logIn = async (state, formData) => {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
  })
  let userId = null;
  let userType = null;
  const domain = process.env.HOST || 'http://localhost:5000'
  const loginStatus = await axios({
    url:  `${domain}/login`,
    method: 'post',
    data: {
      username: validatedFields.data.name,
      password: validatedFields.data.password
    }
  }).then((res) => {
    console.log(res)
    if (res.data['message'] !== 'ok') {
      return {
        message: res.data['message']
      }
    }
    userId = res.data['userId']
    userType = res.data['type']
    return {
      message: 'ok'
    }
  }).catch((err) => {
    console.log(err.message)
  })

  if (loginStatus.message !== 'ok') {
    return {
      error: loginStatus.message
    }
  }

  await createSession(userId, userType).then(
    () => {
      console.log('Session created!')
    }, () => {
      console.log('Session failed!')
    }
  )
  console.log('Success!')
  if (userType === 'admin') {
    redirect('/admin')
  } else {
    redirect('/')
  }
  // return validatedFields;
}
export default logIn;