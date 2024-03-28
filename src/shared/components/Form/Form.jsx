"use client";
import React from 'react';
import styled from 'styled-components';
import { Container, FormTitle, ProxyForm, VStack } from '../../ui';
import Button from '../Button';

const Form = ({children, formProps, sumbitText, onSubmit, sub, sup, title}) => {
	return (
		<Container paddingVertical='48px' paddingHorizontal='32px' width='384px'>
			<ProxyForm {...formProps} onSubmit={onSubmit}>
				<VStack gap='21px'>
					<FormTitle>{title}</FormTitle>
					<VStack gap='12px'>
						{children}
					</VStack>
					{sup}
					<Button.Normal.Filled.Info.Wide>{sumbitText}</Button.Normal.Filled.Info.Wide>
					{sub}
				</VStack>
			</ProxyForm>
		</Container>
	);
};

Form.defaultProps = {
	children: [], 
	formProps: {}, 
	title: 'Форма',
	sumbitText: 'Отправить', 
	onSubmit: ()=>{},
	sub: null,
	sup: null,
}


export const FormStl = styled.div``;

export default Form;