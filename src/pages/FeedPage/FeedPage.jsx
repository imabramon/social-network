'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from '../../components/PostCard/PostCard';
import { VStack } from '../../shared/ui';
import Pagination from '../../shared/components/Pagination/Pagination';

const FeedPage = () => {
  const posts = Array.from({ length: 5 })
    .fill(0)
    .map(() => <PostCard />);

  const [currentPage, setCurrentPage] = useState(1);
  return (
    <FeedPageStl>
      <VStack $gap="26px" $alignItems="center">
        {posts}
        <Pagination
          current={currentPage}
          onPageChange={(value) => {
            setCurrentPage(value);
          }}
        />
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
