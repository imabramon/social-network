'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from '../../components/PostCard/PostCard';
import { VStack } from '../../shared/ui';
import Pagination from '../../shared/components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const NonNaNPass = (value) => {
  const numb = Number(value);
  if (value && !isNaN(numb)) return numb;
  return undefined;
};

const FeedPage = () => {
  const posts = Array.from({ length: 5 })
    .fill(0)
    .map((_, index) => <PostCard id={index} />);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = NonNaNPass(searchParams.get('page')) ?? 1;

  return (
    <FeedPageStl>
      <VStack $gap="26px" $alignItems="center">
        {posts}
        <Pagination
          current={page}
          onPageChange={(value) => {
            setSearchParams({ ...searchParams, page: value });
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
