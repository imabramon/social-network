"use client";
import React from 'react';
import styled from 'styled-components';

import EditProfileForm from '../../forms/EditProfileForm'

const EditProfilePage = ({}) => {
	return (
		<EditProfilePageStl>
			<EditProfileForm />
 		</EditProfilePageStl>
	);
};

export const EditProfilePageStl = styled.div`
	width: 384px;
	height: fit-content;
`;

export default EditProfilePage;