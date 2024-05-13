'use client'

import React from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router'
import { useQuery } from 'react-query'
import ArticleForm from '../../forms/ArticleForm'
import { loadArticle, editArticle } from '../../api'
import { PagePath } from '../../consts/pagePath'

function EditArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    data: articleData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['article', id],
    queryFn: loadArticle,
  })

  return (
    <EditArticlePageStl>
      {!isLoading && !isError ? (
        <ArticleForm
          title="Edit article"
          sumbitText="Send"
          articleData={articleData}
          onSubmit={(data) => {
            const {
              Title: title,
              'Short description': description,
              Text: body,
              Tags: tags,
            } = data

            ;(async () => {
              await editArticle(id, title, description, body, tags)
              navigate(PagePath.article.goTo(id))
            })()
          }}
        />
      ) : (
        <span>{isError ? 'Ошибка, перазагрузите' : 'Загрузка'}</span>
      )}
    </EditArticlePageStl>
  )
}

export const EditArticlePageStl = styled.div`
  width: 938px;
  height: fit-content;
`

export default EditArticlePage
