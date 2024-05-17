'use client'

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import ArticleForm from '../../forms/ArticleForm'
import { loadArticle, editArticle } from '../../api'
import { PagePath } from '../../consts/pagePath'

function EditArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLogged, username] = useSelector((state) => [
    state.userData.logged,
    state.userData.username,
  ])

  const goBackWithNotify = (msg) => {
    setTimeout(
      () =>
        toast(msg, {
          autoClose: 5000,
        }),
      1
    )
    navigate(-1)
    // ;(async () => {
    //   toast(msg, {
    //     autoClose: 5000,
    //   })
    // })()
  }

  const {
    data: articleData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['article', id],
    queryFn: loadArticle,
  })

  useEffect(() => {
    if (!isLogged) {
      goBackWithNotify(
        'Вы не можете редактировать статью так как не авторизованы'
      )
      return
    }

    if (!isLoading && username !== articleData.userInfo.name) {
      goBackWithNotify('Вы не можете редактировать статью другого пользователя')
    }
  }, [isLogged, username, articleData])

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
