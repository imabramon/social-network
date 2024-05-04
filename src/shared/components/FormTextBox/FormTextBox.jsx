'use client';
import React from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput/FormInput';
import { useFormContext } from 'react-hook-form';

const Textbox = styled.textarea`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0px;
  width: 100%;
  resize: none;

  ::placeholder {
    color: #bfbfbf;
  }
`;

const FormTextBox = ({ value, ...props }) => {
  const { register } = useFormContext();
  return <FormInput inputSlot={<Textbox defaultValue={value} rows={6} {...register(props.title)} placeholder={props.title} />} {...props} />;
};

export default FormTextBox;
