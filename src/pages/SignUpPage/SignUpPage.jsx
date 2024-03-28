"use client";
import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';

const SignUpPage = ({}) => {
	return (
		<SignUpPageStl>
 			<SignUpForm/>
 		</SignUpPageStl>
	);
};

export const SignUpPageStl = styled.div`
	width: 384px;
	height: fit-content;
`;

export default SignUpPage;