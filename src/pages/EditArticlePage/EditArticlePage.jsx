'use client';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ArticleForm from '../../forms/ArticleForm';
import { useNavigate, useParams } from 'react-router';
import { loadArticle, editArticle } from '../../api';
import { PagePath } from '../../consts/pagePath';

const EditArticlePage = ({}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [isLoaded, setLoaded] = useState(false)
  const [articleData, setArticleData] = useState({})
  const [textSlot, setTextSlot] = useState('Loading...')

  useEffect(async ()=>{
    
        const data = await loadArticle(id)
        
        setArticleData(data);
        setLoaded(true)
      

  }, [])


  return (
    <EditArticlePageStl>
      {isLoaded ?<ArticleForm
        title={'Edit article'}
        sumbitText={'Send'}
        articleData={articleData}
        onSubmit={(data)=>{
          const { Title: title, 'Short description': description, Text: body, Tags: tags } = data;

          (async()=>{
            try {await editArticle(id, title, description, body, tags);
            navigate(PagePath.article.goTo(id))}
            catch(e){
              console.log('eee boy')
            }
          })()
        }}
      /> : <span>{textSlot}</span>}
    </EditArticlePageStl>
  );
};

export const EditArticlePageStl = styled.div`
  width: 938px;
  height: fit-content;
`;

export default EditArticlePage;
