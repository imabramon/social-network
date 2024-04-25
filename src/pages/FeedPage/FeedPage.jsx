'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from '../../components/PostCard/PostCard';
import { VStack } from '../../shared/ui';
import Pagination from '../../shared/components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { componentFactory } from '../../shared/utils/componentFactory';
import { getArticles } from '../../api';

const NonNaNPass = (value) => {
  const numb = Number(value);
  if (value && !isNaN(numb)) return numb;
  return undefined;
};

const FeedPage = () => {
  const [posts, setPost] = useState([]);
  // const posts = Array.from({ length: 5 })
  //   .fill(0)
  //   .map((_, index) => <PostCard id={index} />);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = NonNaNPass(searchParams.get('page')) ?? 1;
  const [maxPage, setMaxPAge] = useState(10);

  useEffect(() => {
    (async () => {
      const loadedPosts = await getArticles(page);
      setPost(loadedPosts);
    })();
  }, [page]);

  return (
    <FeedPageStl>
      <VStack $gap="26px" $alignItems="center">
        {componentFactory(posts, PostCard)}
        <Pagination
          current={page}
          maxPage={maxPage}
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
