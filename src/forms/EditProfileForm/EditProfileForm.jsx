'use client';
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput';

import { required, inRange, isNotEmpty, isUrl, isEmail } from '../../shared/utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../api';
import { updateUser } from '../../store/actions';

let flag = false;

const EditProfileForm = () => {
  const { username, email, url } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  return (
    <Form
      title={'Edit Profile'}
      sumbitText={'Save'}
      onSubmit={async (values) => {
        const { Username: username, 'Email address': email, 'Avatar image (url)': image, Password: password } = values;
        //if (flag) return;x
        try {
          await update(username, email, password, image);
          dispatch(updateUser({ username, email, password, image }));
          flag = true;
        } catch (e) {
          console.log(e);
        }
      }}
    >
      <FormInput
        title={'Username'}
        validation={[required('Это поле обязательное'), isNotEmpty('Поле не должно быть пустым')]}
        value={username}
        autoComplete="new-password" /* off не работал */
      />
      <FormInput
        title={'Email address'}
        variant={FormVariant.Email}
        validation={[
          required('Это поле обязательное'),
          isNotEmpty('Поле не должно быть пустым'),
          isEmail('Ввведите нормальную почту'),
        ]}
        value={email}
      />
      <FormInput
        title={'New password'}
        variant={FormVariant.Password}
        validation={[required('Это поле обязательное'), inRange(6, 40)('от 6 до 40')]}
        autoComplete="new-password"
      />
      <FormInput
        title={'Avatar image (url)'}
        validation={[isNotEmpty('Поле не должно быть пустым'), isUrl('Введите корректный url')]}
        value={url}
      />
    </Form>
  );
};

export default EditProfileForm;
