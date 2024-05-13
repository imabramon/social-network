'use client'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import ArticleViewer from '../../components/ArticleViewer'
import { loadArticle } from '../../api'
import LoadableContent from '../../shared/components/LoadableContent'

function ViewArticlePage() {
  const { id } = useParams()
  const { data: articleData, isLoading } = useQuery({
    queryKey: ['article', id],
    queryFn: loadArticle,
  })

  return (
    <ViewArticlePageStl>
      <LoadableContent isLoading={isLoading}>
        <ArticleViewer {...articleData} />
      </LoadableContent>
    </ViewArticlePageStl>
  )
}

export const ViewArticlePageStl = styled.div`
  margin-top: 25px;
  margin-bottom: 65px;
  width: 938px;
`

export default ViewArticlePage
