'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router'
import ArticleForm from '../../forms/ArticleForm'
import { loadArticle, editArticle } from '../../api'
import { PagePath } from '../../consts/pagePath'

function EditArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoaded, setLoaded] = useState(false)
  const [articleData, setArticleData] = useState({})
  const [textSlot] = useState('Loading...')

  useEffect(() => {
    loadArticle(id).then((data) => {
      setArticleData(data)
      setLoaded(true)
    })
  }, [])

  return (
    <EditArticlePageStl>
      {isLoaded ? (
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
        <span>{textSlot}</span>
      )}
    </EditArticlePageStl>
  )
}

export const EditArticlePageStl = styled.div`
  width: 938px;
  height: fit-content;
`

export default EditArticlePage
