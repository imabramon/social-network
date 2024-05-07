'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArticleViewer from '../../components/ArticleViewer';
import { loadArticle } from '../../api';
import { useParams, useSearchParams } from 'react-router-dom';
import LoadableContent from '../../shared/components/LoadableContent';

const ViewArticlePage = ({}) => {
  const {id} = useParams();
  const [isLoaded, setLoaded] = useState(false)
  const [articleData, setArticleData] = useState({})
  const [textSlot, setTextSlot] = useState('Loading...')

  useEffect(()=>{
    (async ()=>{
     
        const data = await loadArticle(id)
        setArticleData(data);
        setLoaded(true)
      
    })()
  }, [])

  return (
    <ViewArticlePageStl>
     <LoadableContent isLoading={!isLoaded}><ArticleViewer {...articleData} /></LoadableContent>
    </ViewArticlePageStl>
  );
};

export const ViewArticlePageStl = styled.div`
  margin-top: 25px;
  margin-bottom: 65px;
`;

export default ViewArticlePage;
