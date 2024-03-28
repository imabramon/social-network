import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CreateArticleForm from '../../forms/CreateArticleForm';

const CreateArticlePage = ({}) => {
	return (
		<CreateArticlePageStl>
 			<CreateArticleForm />
 		</CreateArticlePageStl>
	);
};

export const CreateArticlePageStl = styled.div`
	width: 938px;
	height: fit-content;
`;



export default withRouter(CreateArticlePage);