'use client';
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput';
import CallToAction from '../../shared/components/CallToAction';
import Checkbox from '../../shared/components/Checkbox';
import { Divider, VStack } from '../../shared/ui';

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
      <FormInput title={'Username'} />
      <FormInput title={'Email address'} variant={FormVariant.Email} />
      <FormInput title={'Password'} variant={FormVariant.Password} />
      <FormInput title={'Repeat Password'} variant={FormVariant.Password} />
    </Form>
  );
};

export default SignUpForm;
