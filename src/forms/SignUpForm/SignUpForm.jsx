'use client';
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput';
import CallToAction from '../../shared/components/CallToAction';
import Checkbox from '../../shared/components/Checkbox';
import { Divider, VStack } from '../../shared/ui';

import {
  required,
  inRange,
  isNotEmpty,
  isEmail,
  isSameAs,
} from '../../shared/utils/validation';

const Sub = () => (
  <CallToAction call="Already have an account? " action="Sign In" />
);
const Sup = () => (
  <VStack $gap="8px">
    <Divider />
    <Checkbox name={'I agree to the processing of my personal information'} />
  </VStack>
);

const SignUpForm = ({}) => {
  return (
    <Form
      sub={<Sub />}
      sup={<Sup />}
      title={'Create new account'}
      sumbitText={'Create'}
    >
      <FormInput
        title={'Username'}
        validation={[
          required('Это обязательное поле'),
          inRange(3, 20)('От 3 до 20'),
        ]}
      />
      <FormInput
        title={'Email address'}
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
          inRange(6, 40)('от 6 до 40'),
        ]}
      />
      <FormInput
        title={'Repeat Password'}
        variant={FormVariant.Password}
        validation={[
          required('Это поле обязательное'),
          isSameAs('Password')('Пароли должны совпадать'),
        ]}
      />
    </Form>
  );
};

export default SignUpForm;
