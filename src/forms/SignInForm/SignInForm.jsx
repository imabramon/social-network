'use client'

import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Form from '../../shared/components/Form'
import FormInput, { FormInputVariant } from '../../shared/components/FormInput'
import CallToAction from '../../shared/components/CallToAction'

import { required, isNotEmpty, isEmail } from '../../shared/utils/validation'
import { getUserInfo, login } from '../../api'
import { loginUser } from '../../store/reducer'
import { PagePath } from '../../consts/pagePath'

function Sub() {
  return (
    <CallToAction
      call="Don’t have an account? "
      action="Sign Up"
      to={PagePath.userSignUp}
    />
  )
}

function SignInForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Form
      sub={<Sub />}
      title="Sign In"
      sumbitText="Login"
      onSubmit={async (values) => {
        const { Email: email, Password: password } = values

        const {
          username,
          image = 'https://static.productionready.io/images/smiley-cyrus.jpg',
          token,
        } = await login(email, password)

        // await getUserInfo()
        dispatch(loginUser({ username, email, image, token }))
        navigate(PagePath.feed)
      }}
    >
      <FormInput
        title="Email"
        required
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
          isNotEmpty('Полне не должно быть пустым'),
        ]}
      />
    </Form>
  )
}

export default SignInForm
