"use client";
import React from 'react';

import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput'
import CallToAction from '../../shared/components/CallToAction';
import Checkbox from '../../shared/components/Checkbox';
import { Divider, VStack } from '../../shared/ui';


const EditProfileForm = ({}) => {
	return (
		<Form title={'Edit Profile'} sumbitText={'Save'}>
			<FormInput title={'Username'} />
			<FormInput title={'Email address'} variant={FormVariant.Email}/>
			<FormInput title={'New password'} variant={FormVariant.Password}/>
			<FormInput title={'Avatar image (url)'} />
		</Form>
	);
};


export default EditProfileForm;