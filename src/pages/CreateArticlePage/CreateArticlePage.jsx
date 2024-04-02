import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ArticleForm from '../../forms/ArticleForm';

const CreateArticlePage = ({}) => {
  return (
    <CreateArticlePageStl>
      <ArticleForm title={'Create new article'} sumbitText={'Send'} />
    </CreateArticlePageStl>
  );
};

export const CreateArticlePageStl = styled.div`
  width: 938px;
  height: fit-content;
`;

export default withRouter(CreateArticlePage);
