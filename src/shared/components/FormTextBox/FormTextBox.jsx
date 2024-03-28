"use client";
import React from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput/FormInput';

const Textbox = styled.textarea`
	font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    background-color: white;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding: 8px 12px;
    margin: 0px;
    width: 100%;
	resize: none;

    ::placeholder{
        color: #BFBFBF;
    }
`

const FormTextBox = ({value, ...props}) => {
	return (
		<FormInput inputSlot={<Textbox value={value} rows={6}/>} {...props}/>
	);
};



export default FormTextBox;