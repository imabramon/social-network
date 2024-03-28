"use client";
import React from 'react';
import styled from 'styled-components';
import { Input, InputTitle, Label } from '../../ui';

const FormInput = ({title, invalidText, inputProps, titleProps, variant={}, inputSlot}) => {
	return (
		<Label>
			<InputTitle {...variant.titleProps} {...titleProps}>{title}</InputTitle>
			{inputSlot ??  <Input {...variant.inputProps} {...inputProps} invalidText={invalidText}/>}
		</Label>
	);
};

FormInput.defaultProps = {
    inputSlot: undefined,
}

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