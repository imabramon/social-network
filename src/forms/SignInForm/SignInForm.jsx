'use client';
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormInputVariant } from '../../shared/components/FormInput';
import CallToAction from '../../shared/components/CallToAction';

import { required, isNotEmpty, isEmail } from '../../shared/utils/validation';
import { useDispatch } from 'react-redux';
import { getUserInfo, login } from '../../api';
import { useFormContext } from 'react-hook-form';
import { loginUser } from '../../store/actions';
import { useNavigate } from 'react-router';
import { PagePath } from '../../consts/pagePath';

const Sub = () => <CallToAction call="Don’t have an account? " action="Sign Up" to={PagePath.userSignUp}/>;

const SignInForm = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Form
      sub={<Sub />}
      title={'Sign In'}
      sumbitText={'Login'}
      onSubmit={async (values) => {
        const { Email: email, Password: password } = values;
        
          const { username, image = 'https://static.productionready.io/images/smiley-cyrus.jpg' } = await login(email, password);
          const res = await getUserInfo();
          dispatch(loginUser({ username, email, image }));
          navigate(PagePath.feed);
        
      }}
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
        variant={FormInputVariant.Password}
        validation={[required('Это поле обязательное'), isNotEmpty('Полне не должно быть пустым')]}
      />
    </Form>
  );
};

export default SignInForm;
