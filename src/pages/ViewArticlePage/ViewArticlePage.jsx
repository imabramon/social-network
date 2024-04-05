'use client';
import React from 'react';
import styled from 'styled-components';
import ArticleViewer from '../../components/ArticleViewer';

const ViewArticlePage = ({}) => {
  return (
    <ViewArticlePageStl>
      <ArticleViewer />
    </ViewArticlePageStl>
  );
};

export const ViewArticlePageStl = styled.div``;

export default ViewArticlePage;
