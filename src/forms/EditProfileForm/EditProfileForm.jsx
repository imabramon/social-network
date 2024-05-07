'use client'

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Form from '../../shared/components/Form'
import FormInput, { FormInputVariant } from '../../shared/components/FormInput'

import {
  required,
  inRange,
  isNotEmpty,
  isUrl,
  isEmail,
} from '../../shared/utils/validation'
import { update } from '../../api'
import { updateUser } from '../../store/actions'

const flag = false

function EditProfileForm() {
  const { username, email, image } = useSelector((state) => state.userData)
  const dispatch = useDispatch()
  return (
    <Form
      title="Edit Profile"
      sumbitText="Save"
      onSubmit={async (values) => {
        const {
          Username: username,
          'Email address': email,
          'Avatar image (url)': image,
          Password: password,
        } = values

        await update(username, email, password, image)
        dispatch(
          updateUser({
            username,
            email,
            password,
            image,
          })
        )
      }}
    >
      <FormInput
        title="Username"
        validation={[
          required('Это поле обязательное'),
          isNotEmpty('Поле не должно быть пустым'),
        ]}
        value={username}
        autoComplete="new-password" /* off не работал */
      />
      <FormInput
        title="Email address"
        variant={FormInputVariant.Email}
        validation={[
          required('Это поле обязательное'),
          isNotEmpty('Поле не должно быть пустым'),
          isEmail('Ввведите нормальную почту'),
        ]}
        value={email}
      />
      <FormInput
        title="New password"
        variant={FormInputVariant.Password}
        validation={[inRange(6, 40)('от 6 до 40')]}
        autoComplete="new-password"
      />
      <FormInput
        title="Avatar image (url)"
        validation={[isUrl('Введите корректный url')]}
        value={image}
      />
    </Form>
  )
}

export default EditProfileForm
