"use client";
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { withReactHookValidation } from '../../utils/validation';
import { FormInputError } from '../FormInput/FormInputError';
import { VStack } from '../../ui';

const Label = styled.label`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;

  width: 100%;
  background-color: white;

  &::before {
    position: relative;
    content: url('/checkbox.svg');;
    width: 16px;
    height: 16px;
  }

  &:has(:checked)::before {
    content: url('/checkbox--checked.svg');
  }
`;
const CheckboxAtom = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
const LabelTitle = styled.span`
  padding-left: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #4a4a4a;
`;

const Checkbox = ({name, text, checked: propsChecked = true, validation}) => {
  const {register, watch, formState: { errors },} = useFormContext()
  const [checked, setChecked] = useState(propsChecked)
	return (
		<VStack>
		  <Label>
  			<CheckboxAtom checked={checked} onClick={()=>{setChecked(val => !val)}} {...register(name, withReactHookValidation(watch, validation, name))}/>
  			<LabelTitle>{text}</LabelTitle>
       
      </Label>
      <FormInputError error={errors[name]}>{errors?.[name]?.message}</FormInputError>
		</VStack>
	);
};


export default Checkbox;