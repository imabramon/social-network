'use client'

import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Form from '../../shared/components/Form'
import FormInput, { FormInputVariant } from '../../shared/components/FormInput'
import CallToAction from '../../shared/components/CallToAction'
import Checkbox from '../../shared/components/Checkbox'
import { Divider, VStack } from '../../shared/ui'

import {
  required,
  inRange,
  isNotEmpty,
  isEmail,
  isSameAs,
} from '../../shared/utils/validation'
import { register } from '../../api'
import { loginUser } from '../../store/actions'
import { PagePath } from '../../consts/pagePath'

function Sub() {
  return (
    <CallToAction
      call="Already have an account? "
      action="Sign In"
      to={PagePath.userSignIn}
    />
  )
}
function Sup() {
  return (
    <VStack $gap="8px">
      <Divider />
      <Checkbox
        name="piCheckbox"
        text={'I agree to the processing of my personal information'}
        validation={[required('Это поле обязательно')]}
      />
    </VStack>
  )
}

function SignUpForm() {
  const dispatch = useDispatch()
  const naviagte = useNavigate()

  return (
    <Form
      sub={<Sub />}
      sup={<Sup />}
      title="Create new account"
      sumbitText="Create"
      onSubmit={async (values) => {
        const {
          Username: username,
          'Email address': email,
          Password: password,
        } = values
        await register(username, email, password)
        dispatch(
          loginUser({
            username,
            image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          })
        )
        naviagte(PagePath.feed)
        //  try{

        // catch(e){
        //   const {setError} = useFormContext()
        //   const {response: {data:{ errors}}} = e
        //   for(const [field, errorMessege] of Object.entries(errors)){
        //     setError(mapKeysToTitle[field], errorMessege)
        //   }
        // }
      }}
    >
      <FormInput
        title="Username"
        validation={[
          required('Это обязательное поле'),
          inRange(3, 20)('От 3 до 20'),
        ]}
      />
      <FormInput
        title="Email address"
        validation={[
          required('Это поле обязательное'),
          isEmail('Введите почту'),
          isNotEmpty('Полне не должно быть пустым'),
        ]}
      />
      <FormInput
        title="Password"
        variant={FormInputVariant.Password}
        validation={[
          required('Это поле обязательное'),
          inRange(6, 40)('от 6 до 40'),
        ]}
      />
      <FormInput
        title="Repeat Password"
        variant={FormInputVariant.Password}
        validation={[
          required('Это поле обязательное'),
          isSameAs('Password')('Пароли должны совпадать'),
        ]}
      />
    </Form>
  )
}

export default SignUpForm
