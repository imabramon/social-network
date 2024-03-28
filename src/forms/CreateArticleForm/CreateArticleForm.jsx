"use client";
import React from 'react';
import styled from 'styled-components';
import FormTextBox from '../../shared/components/FormTextBox';
import Form from '../../shared/components/Form';
import FormInput, { FormVariant } from '../../shared/components/FormInput'

const CreateArticleForm = ({}) => {
	return (
		<Form  title={'Create new article'} sumbitText={'Send'}>
			<FormInput title={'Title'} />
			<FormInput title={'Short description'} />
			<FormTextBox title={'Text'}/>
		</Form>
	);
};

export const CreateArticleFormStl = styled.div``;

export default CreateArticleForm;