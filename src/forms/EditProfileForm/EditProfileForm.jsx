'use client';
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput';

import {
  required,
  inRange,
  isNotEmpty,
  isUrl,
  isEmail,
} from '../../shared/utils/validation';

const EditProfileForm = ({ userData: { username, email, avatarURl } = {} }) => {
  return (
    <Form title={'Edit Profile'} sumbitText={'Save'}>
      <FormInput
        title={'Username'}
        validation={[
          required('Это поле обязательное'),
          isNotEmpty('Поле не должно быть пустым'),
        ]}
      />
      <FormInput
        title={'Email address'}
        variant={FormVariant.Email}
        validation={[
          required('Это поле обязательное'),
          isNotEmpty('Поле не должно быть пустым'),
          isEmail('Ввведите нормальную почту'),
        ]}
      />
      <FormInput
        title={'New password'}
        variant={FormVariant.Password}
        validation={[
          required('Это поле обязательное'),
          inRange(6, 40)('от 6 до 40'),
        ]}
      />
      <FormInput
        title={'Avatar image (url)'}
        validation={[
          isNotEmpty('Поле не должно быть пустым'),
          isUrl('Введите корректный url'),
        ]}
      />
    </Form>
  );
};

export default EditProfileForm;
