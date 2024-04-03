'use client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostCard from '../../components/PostCard/PostCard';
import { VStack } from '../../shared/ui';

const FeedPage = () => {
  useEffect(() => {}, []);
  return (
    <FeedPageStl>
      <VStack $gap="26px">
        <PostCard />
        <PostCard />
        <PostCard />
      </VStack>
    </FeedPageStl>
  );
};

export const FeedPageStl = styled.div`
  width: 938px;
  height: fit-content;
  margin-top: 30px;
`;
export default FeedPage;
