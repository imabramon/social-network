'use client';
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput';
import CallToAction from '../../shared/components/CallToAction';
import Checkbox from '../../shared/components/Checkbox';
import { Divider, VStack } from '../../shared/ui';

import { required, inRange, isNotEmpty, isEmail, isSameAs } from '../../shared/utils/validation';
import { register } from '../../api';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions';
import { useNavigate } from 'react-router';
import { PagePath } from '../../consts/pagePath';

const Sub = () => <CallToAction call="Already have an account? " action="Sign In" />;
const Sup = () => (
  <VStack $gap="8px">
    <Divider />
    <Checkbox name='piCheckbox' text={'I agree to the processing of my personal information'} validation={[required('Это поле обязательно')]} />
  </VStack>
);

const SignUpForm = ({}) => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  return (
    <Form
      sub={<Sub />}
      sup={<Sup />}
      title={'Create new account'}
      sumbitText={'Create'}
      onSubmit={async (values) => {
        const { Username: username, 'Email address': email, Password: password } = values;
       
          await register(username, email, password);
          dispatch(loginUser(username));
          naviagte(PagePath.feed);
        
      }}
    >
      <FormInput title={'Username'} validation={[required('Это обязательное поле'), inRange(3, 20)('От 3 до 20')]} />
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
        validation={[required('Это поле обязательное'), inRange(6, 40)('от 6 до 40')]}
      />
      <FormInput
        title={'Repeat Password'}
        variant={FormVariant.Password}
        validation={[required('Это поле обязательное'), isSameAs('Password')('Пароли должны совпадать')]}
      />
    </Form>
  );
};

export default SignUpForm;
