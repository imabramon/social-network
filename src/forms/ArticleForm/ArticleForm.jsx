'use client';
import React from 'react';
import FormTextBox from '../../shared/components/FormTextBox';
import Form from '../../shared/components/Form';
import FormInput from '../../shared/components/FormInput';
import FormList from '../../shared/components/FormList';

const ArticleForm = ({ title, sumbitText, articleData }) => {
  return (
    <Form title={title} sumbitText={sumbitText}>
      <FormInput title={'Title'} value={articleData.title} />
      <FormInput title={'Short description'} value={articleData.description} />
      <FormTextBox title={'Text'} value={articleData.text} />
      <FormList title={'Tags'} value={articleData.tags} />
    </Form>
  );
};

ArticleForm.defaultProps = {
  articleData: {
    title: '',
    description: '',
    text: '',
    tags: [],
  },
};

export default ArticleForm;
