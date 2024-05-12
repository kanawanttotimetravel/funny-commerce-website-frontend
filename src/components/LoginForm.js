'use client'

import {useFormState} from 'react-dom'

import FormInput from "@/components/FormInput";
import logIn from "@/apis/logIn";

const LoginForm = () => {
  const [state, action] = useFormState(logIn, undefined)

  return (
    <form style={FormStyle} action={action}>
      <FormInput name={"name"} placeholder={"USERNAME"}>
      </FormInput>
      <FormInput name={"password"} placeholder={"PASSWORD"} type={"password"}>
      </FormInput>
      <button style={ButtonStyle} type="submit">Sign Up</button>

    </form>
  )
}

const FormStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
}

const ButtonStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '18.75rem',
  height: '2.8125rem',
  borderRadius: '0.25rem',
}

export default LoginForm;