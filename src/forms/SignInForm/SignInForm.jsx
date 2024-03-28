"use client";
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput'
import CallToAction from '../../shared/components/CallToAction';
import Checkbox from '../../shared/components/Checkbox';
import { Divider, VStack } from '../../shared/ui';

const Sub = () => (<CallToAction call='Don’t have an account? ' action='Sign Up'/>)

const SignInForm = ({}) => {
	return (
		<Form sub={<Sub/>} title={'Create new account'} sumbitText={'Create'}>
			<FormInput title={'Username'} />
			<FormInput title={'Password'} variant={FormVariant.Password}/>
		</Form>
	);
};


export default SignInForm;