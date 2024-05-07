'use client'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import { VStack } from '../../shared/ui'
import Pagination from '../../shared/components/Pagination/Pagination'
import { componentFactory } from '../../shared/utils/componentFactory'
import { getArticles } from '../../api'
import LoadableContent from '../../shared/components/LoadableContent'

const NonNaNPass = (value) => {
  const numb = Number(value)
  if (value && !isNaN(numb)) return numb
  return undefined
}

function FeedPage() {
  const [posts, setPost] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const page = NonNaNPass(searchParams.get('page')) ?? 1
  const [maxPage, setMaxPAge] = useState(10)

  useEffect(() => {
    ;(async () => {
      const loadedPosts = await getArticles(page)
      setPost(loadedPosts)
    })()
  }, [page])

  return (
    <FeedPageStl>
      <VStack $gap="26px" $alignItems="center">
        <LoadableContent isLoading={posts.length === 0}>
          {componentFactory(posts, PostCard)}
        </LoadableContent>
        <Pagination
          current={page}
          maxPage={maxPage}
          onPageChange={(value) => {
            setSearchParams({ ...searchParams, page: value })
          }}
        />
      </VStack>
    </FeedPageStl>
  )
}

export const FeedPageStl = styled.div`
  width: 938px;
  height: fit-content;
  margin-top: 30px;
  margin-bottom: 20px;
`
export default FeedPage
