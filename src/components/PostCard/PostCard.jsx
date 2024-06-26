'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { useNavigate } from 'react-router'
import {
  Avatar,
  Container,
  HStack,
  Header,
  NameTitle,
  SubText,
  Tag,
  Text,
  VStack,
} from '../../shared/ui'
import LikesIcon from '../../shared/components/LikesIcon'
import { PagePath } from '../../consts/pagePath'
import { componentFactory } from '../../shared/utils/componentFactory.jsx'
import ContentMayOverflow from '../../shared/components/ContentMayOverflow'
import { markFavorite, markUnfavorite } from '../../api.js'

// Alias for more understanding
const PostTitle = HStack
const PostInfo = VStack
const TagsContainer = HStack
const SideInfo = HStack
const TextInfo = VStack
const DateTitle = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.5);
  text-align: right;
`

const formatDate = (date) => format(new Date(date), 'MMMM d, yyyy')

function PostCard({
  id,
  title,
  likes: propLikes,
  tags,
  description,
  userInfo: { name, avatarUrl },
  date,
  isLiked,
}) {
  const navigate = useNavigate()
  const goToArticle = () => navigate(PagePath.article.goTo(id))
  const [likes, setLikes] = useState(propLikes)
  const likeArticle = async () => {
    await markFavorite(id)
    setLikes((val) => val + 1)
    return true
  }
  const unlikeArticle = async () => {
    await markUnfavorite(id)
    setLikes((val) => val - 1)
    return true
  }

  const isTitleOverflow = title.length > 61

  return (
    <Container $paddingvertical="16px" $paddinghorizontal="16px" height="140px">
      <HStack $justifyContent="space-between">
        <PostInfo width="682px" $gap="4px">
          <PostTitle
            height="28px"
            width={isTitleOverflow ? '610px' : 'fit-content'}
            $gap="13px"
          >
            <ContentMayOverflow isOverflow={isTitleOverflow}>
              <Header onClick={goToArticle} width="fit-content" $cursor='pointer'>
                {title}
              </Header>
            </ContentMayOverflow>
            <LikesIcon
              value={likes}
              onLike={likeArticle}
              onUnlike={unlikeArticle}
              isLiked={isLiked}
            />
          </PostTitle>
          <TagsContainer height="fit-content" $gap="8px">
            {tags ? componentFactory(tags, Tag) : null}
          </TagsContainer>
          <Text>{description}</Text>
        </PostInfo>
        <SideInfo width="205px" $justifyContent="flex-end" $gap="12px">
          <TextInfo $alignItem="flex-end" width="147px">
            <NameTitle>{name}</NameTitle>
            <DateTitle>{formatDate(date)}</DateTitle>
          </TextInfo>
          <Avatar src={avatarUrl} size="46px" />
        </SideInfo>
      </HStack>
    </Container>
  )
}

// PostCard.defaultProps = {
//   title: 'Some article title',
//   likes: 12,
//   tags: ['tag1', 'tag2', 'tag3'],
//   dedscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. `,
//   userInfo: {
//     name: 'John Doe',
//     avatarUrl:
//       'https://sun9-60.userapi.com/s/v1/ig2/nHV2SqpSQ7Q7BkqK8_cWXYwZf4e4weIdpe1DGcW9_e4SkyK0Rw-acA4baUuUMLu_o8imF5xwLf0tD5hfH7zxHAQx.jpg?size=50x50&quality=95&crop=84,40,509,509&ava=1',
//   },
//   date: '2020-03-05',
// };

export default PostCard
