"use client";
import React from 'react';
import styled from 'styled-components';
import { Input, InputTitle, Label } from '../../ui';

const FormInput = ({title, invalidText, inputProps, titleProps, variant={}}) => {
	return (
		<Label>
			<InputTitle {...variant.titleProps} {...titleProps}>{title}</InputTitle>
			<Input {...variant.inputProps} {...inputProps} invalidText={invalidText}/>
		</Label>
	);
};

export const FormVariant = {
    Email: {
        inputProps:{
            type:'email'
        }
    },
    Password: {
        inputProps:{
            type:'password',
			minLength: '6'
        }
	}
};

export default FormInput;