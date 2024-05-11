'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import { useNavigate } from 'react-router'
import Button from '../../shared/components/Button/Button'
import LikesIcon from '../../shared/components/LikesIcon'
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
import { PagePath } from '../../consts/pagePath'
import {
  deleteArticleReq,
  getUserInfo,
  markFavorite,
  markUnfavorite,
} from '../../api'
import { componentFactory } from '../../shared/utils/componentFactory.jsx'

// Alias for more understanding
const PostHeader = HStack
const PostTitle = HStack
const PostInfo = VStack
const TagsContainer = HStack
const SideInfo = VStack
const UserInfo = HStack
const TextInfo = VStack
const DateTitle = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.5);
  text-align: right;
`
const EditButton = Button.Small.Highlighted.Action.Fit
const DeleteButton = Button.Small.Highlighted.Negative.Fit
const NoButton = Button.Small.Highlighted.Neutral.Fit
const YesButton = Button.Small.Filled.Info.Fit

const formatDate = (date) => format(new Date(date), 'MMMM d, yyyy')

const MarkdownWrapper = styled.div`
  & * {
    font-weight: normal;
    color: rgba(0, 0, 0, 0.75);
    line-height: 28px;
    font-size: 14px;
    white-space: 'pre-wrap';
  }

  & h1 {
    font-size: 20px;
  }

  & h2 {
    font-size: 18px;
  }
`

const PopUpContainer = styled.div`
  width: 238px;
  height: 120px;
  background: url('/popup-bg.svg');
  transform: translateY(35px);
  padding: 16px 16px;
  padding-left: 42px;
`

const PopupText = styled.p`
  margin: 0;
  position: relative;
  width: 184px;
  height: 104px;
  font-size: 14px;
  line-height: 22px;
  &::before {
    content: ' ';
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    background: url('/icon-info.svg');
    transform: translateX(-18px);
  }
`

function PopUpConfirm({ onAccess, onClose }) {
  return (
    <PopUpContainer>
      <VStack $gap="12px">
        <PopupText>Are you sure to delete this article?</PopupText>
        <HStack $alignSelf="flex-end" width="fit-content" $gap="8px">
          <NoButton onClick={onClose}>No</NoButton>
          <YesButton onClick={onAccess}>Yes</YesButton>
        </HStack>
      </VStack>
    </PopUpContainer>
  )
}

function ArticleControl({ onDelete, onEdit }) {
  return (
    <HStack $gap="12px">
      <Popup
        trigger={<DeleteButton>Delete</DeleteButton>}
        position="right center"
      >
        {(close) => <PopUpConfirm onClose={close} onAccess={onDelete} />}
      </Popup>
      <EditButton onClick={onEdit}>Edit</EditButton>
    </HStack>
  )
}

function ArticleViewer({
  id,
  title,
  likes: propLikes,
  tags,
  description,
  userInfo: { name, avatarUrl },
  date,
  text,
  isLiked,
}) {
  const navigate = useNavigate()
  const loggedUserName = useSelector((state) => state.userData.username)
  const deleteArticle = async () => {
    await deleteArticleReq(id)
    navigate(PagePath.feed)
  }
  const editArticle = () => navigate(PagePath.editArticle.goTo(id))
  const sideSlot =
    loggedUserName === name ? (
      <ArticleControl onDelete={deleteArticle} onEdit={editArticle} />
    ) : null
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
    <Container
      $paddingvertical="16px"
      $paddinghorizontal="16px"
      height="fit-content"
    >
      <VStack $gap="25px">
        <PostHeader $justifyContent="space-between">
          <PostInfo width="682px" $gap="4px">
            <PostTitle height="fit-content" $gap="13px">
              <Header>{title}</Header>
              <LikesIcon
                value={likes}
                onLike={likeArticle}
                onUnlike={unlikeArticle}
                isLiked={isLiked}
              />
            </PostTitle>
            <TagsContainer height="fit-content" $gap="8px">
              {componentFactory(tags, Tag)}
            </TagsContainer>
            <Text>{description}</Text>
          </PostInfo>
          <SideInfo width="205px" $gap="30px">
            <UserInfo $justifyContent="flex-end" $gap="12px">
              <TextInfo $alignItem="flex-end" width="147px">
                <NameTitle>{name}</NameTitle>
                <DateTitle>{formatDate(date)}</DateTitle>
              </TextInfo>
              <Avatar src={avatarUrl} size="" />
            </UserInfo>
            {sideSlot}
          </SideInfo>
        </PostHeader>
        <MarkdownWrapper>
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </MarkdownWrapper>
      </VStack>
    </Container>
  )
}

// ArticleViewer.defaultProps = {
//   title: 'Some article title',
//   likes: 12,
//   tags: ['tag1', 'tag2', 'tag3'],
//   dedscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. `,
//   userInfo: {
//     id: 0,
//     name: 'John Doe',
//     avatarUrl:
//       'https://sun9-60.userapi.com/s/v1/ig2/nHV2SqpSQ7Q7BkqK8_cWXYwZf4e4weIdpe1DGcW9_e4SkyK0Rw-acA4baUuUMLu_o8imF5xwLf0tD5hfH7zxHAQx.jpg?size=50x50&quality=95&crop=84,40,509,509&ava=1',
//   },
//   date: '2020-03-05',
//   text: `
//  # Title

// Some paragraph in article

// ## h2 title
// - list 1
// - list 2
//   `,
// };

export default ArticleViewer
