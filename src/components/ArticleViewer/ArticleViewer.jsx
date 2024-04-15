'use client';
import React from 'react';
import styled from 'styled-components';
import { Avatar, Container, HStack, Header, NameTitle, SubText, Tag, Text, VStack } from '../../shared/ui';
import LikesIcon from '../../shared/components/LikesIcon';
import { format } from 'date-fns';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Button from '../../shared/components/Button/Button';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';

//Alias for more understanding
const PostHeader = HStack;
const PostTitle = HStack;
const PostInfo = VStack;
const TagsContainer = HStack;
const SideInfo = VStack;
const UserInfo = HStack;
const TextInfo = VStack;
const DateTitle = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.5);
`;
const EditButton = Button.Small.Highlighted.Action.Fit;
const DeleteButton = Button.Small.Highlighted.Negative.Fit;
const NoButton = Button.Small.Highlighted.Neutral.Fit;
const YesButton = Button.Small.Filled.Info.Fit;

const componentFactory = (data, ComponentBasic) =>
  data.map((item, index) => {
    const { key = index, id, ...restItem } = item;
    switch (true) {
      case typeof item === 'object':
        return <ComponentBasic key={id ?? key} {...restItem} />;
      default:
        return <ComponentBasic key={id ?? key}>{item}</ComponentBasic>;
    }
  });

const formatDate = (date) => {
  return format(new Date(date), 'MMMM d, yyyy');
};

const MarkdownWrapper = styled.div`
  & * {
    font-weight: normal;
    color: rgba(0, 0, 0, 0.75);
    line-height: 28px;
    font-size: 14px;
  }

  & h1 {
    font-size: 20px;
  }

  & h2 {
    font-size: 18px;
  }
`;

const PopUpContainer = styled.div`
  width: 238px;
  height: 120px;
  background: url('/popup-bg.svg');
  transform: translateY(35px);
  padding: 16px 16px;
  padding-left: 42px;
`;

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
`;

const PopUpConfirm = ({ onAccess, onClose }) => {
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
  );
};

const ArticleControl = ({ onDelete, onEdit }) => {
  return (
    <HStack $gap="12px">
      <Popup trigger={<DeleteButton>Delete</DeleteButton>} position="right center">
        {(close) => {
          return <PopUpConfirm onClose={close} onAccess={onDelete} />;
        }}
      </Popup>
      <EditButton onClick={onEdit}>Edit</EditButton>
    </HStack>
  );
};

const ArticleViewer = ({ title, likes, tags, dedscription, userInfo: { id, name, avatarUrl }, date, text }) => {
  const loggedUserId = useSelector((state) => state.userData.id);
  const deleteArticle = () => console.log('article delete');
  const editArticle = () => console.log('article edit');
  const sideSlot = loggedUserId === id ? <ArticleControl onDelete={deleteArticle} onEdit={editArticle} /> : null;

  return (
    <Container $paddingvertical="16px" $paddinghorizontal="16px" height="fit-content">
      <VStack $gap="25px">
        <PostHeader $justifyContent="space-between">
          <PostInfo width="682px" $gap="4px">
            <PostTitle height="fit-content" $gap="13px">
              <Header>{title}</Header>
              <LikesIcon value={likes} />
            </PostTitle>
            <TagsContainer height="fit-content" $gap="8px">
              {componentFactory(tags, Tag)}
            </TagsContainer>
            <Text>{dedscription}</Text>
          </PostInfo>
          <SideInfo width="141px" $gap="30px">
            <UserInfo>
              <TextInfo>
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
  );
};

ArticleViewer.defaultProps = {
  title: 'Some article title',
  likes: 12,
  tags: ['tag1', 'tag2', 'tag3'],
  dedscription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. `,
  userInfo: {
    id: 0,
    name: 'John Doe',
    avatarUrl:
      'https://sun9-60.userapi.com/s/v1/ig2/nHV2SqpSQ7Q7BkqK8_cWXYwZf4e4weIdpe1DGcW9_e4SkyK0Rw-acA4baUuUMLu_o8imF5xwLf0tD5hfH7zxHAQx.jpg?size=50x50&quality=95&crop=84,40,509,509&ava=1',
  },
  date: '2020-03-05',
  text: `
 # Title

Some paragraph in article

## h2 title
- list 1
- list 2 
  `,
};

export default ArticleViewer;
