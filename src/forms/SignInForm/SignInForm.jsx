"use client";
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput'
import CallToAction from '../../shared/components/CallToAction';

const Sub = () => (<CallToAction call='Don’t have an account? ' action='Sign Up'/>)

const SignInForm = ({}) => {
	return (
		<Form sub={<Sub/>} title={'Sign In'} sumbitText={'Create'}>
			<FormInput title={'Username'} />
			<FormInput title={'Password'} variant={FormVariant.Password}/>
		</Form>
	);
};


export default SignInForm;