'use client';
import React from 'react';
import styled from 'styled-components';
import ArticleForm from '../../forms/ArticleForm';

const testData = {
  title: 'Important Article Title',
  description: 'Some short description that displays in atricles list',
  text: `# Title

Some paragraph in article

## h2 title
- list 1
- list 2`,
  tags: ['programming', 'haskell', 'fp'],
};

const EditArticlePage = ({}) => {
  return (
    <EditArticlePageStl>
      <ArticleForm
        title={'Edit article'}
        sumbitText={'Send'}
        articleData={testData}
      />
    </EditArticlePageStl>
  );
};

export const EditArticlePageStl = styled.div`
  width: 938px;
  height: fit-content;
`;

export default EditArticlePage;
