'use client';
import React from 'react';
import styled from 'styled-components';
import { Avatar, Container, HStack, Header, NameTitle, SubText, Tag, Text, VStack } from '../../shared/ui';
import LikesIcon from '../../shared/components/LikesIcon';
import { format } from 'date-fns';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

//Alias for more understanding
const PostHeader = HStack;
const PostTitle = HStack;
const PostInfo = VStack;
const TagsContainer = HStack;
const SideInfo = HStack;
const TextInfo = VStack;
const DateTitle = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

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

const ArticleViewer = ({ title, likes, tags, dedscription, userInfo: { name, avatarUrl }, date, text }) => {
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
          <SideInfo width="141px">
            <TextInfo>
              <NameTitle>{name}</NameTitle>
              <DateTitle>{formatDate(date)}</DateTitle>
            </TextInfo>
            <Avatar src={avatarUrl} size="" />
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
