import React from 'react';
import styled from 'styled-components';
import ArticleForm from '../../forms/ArticleForm';
import { useNavigate } from 'react-router';
import { createArticle } from '../../api';
import { PagePath } from '../../consts/pagePath';

const CreateArticlePage = ({}) => {
  const navigate = useNavigate();
  return (
    <CreateArticlePageStl>
      <ArticleForm
        title={'Create new article'}
        sumbitText={'Send'}
        onSubmit={(values) => {
          const { Title: title, 'Short description': description, Text: body, Tags: tags } = values;
          (async () => {
            const id = await createArticle(title, description, body, tags);
            navigate(PagePath.article.goTo(id))
          })();
        }}
      />
    </CreateArticlePageStl>
  );
};

export const CreateArticlePageStl = styled.div`
  width: 938px;
  height: fit-content;
`;

export default CreateArticlePage;
