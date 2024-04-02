'use client';
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput';
import CallToAction from '../../shared/components/CallToAction';

import { required, isNotEmpty, isEmail } from '../../shared/utils/validation';

const Sub = () => (
  <CallToAction call="Don’t have an account? " action="Sign Up" />
);

const SignInForm = ({}) => {
  return (
    <Form
      sub={<Sub />}
      title={'Sign In'}
      sumbitText={'Create'}
      onSubmit={() => {}}
    >
      <FormInput
        title={'Email'}
        required
        validation={[
          required('Это поле обязательное'),
          isEmail('Введите почту'),
          isNotEmpty('Полне не должно быть пустым'),
        ]}
      />
      <FormInput
        title={'Password'}
        variant={FormVariant.Password}
        validation={[
          required('Это поле обязательное'),
          isNotEmpty('Полне не должно быть пустым'),
        ]}
      />
    </Form>
  );
};

export default SignInForm;
