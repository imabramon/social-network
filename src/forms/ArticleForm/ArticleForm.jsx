'use client';
import React from 'react';
import FormTextBox from '../../shared/components/FormTextBox';
import Form from '../../shared/components/Form';
import FormInput from '../../shared/components/FormInput';
import FormList from '../../shared/components/FormList';
import Button from '../../shared/components/Button';

const submitButton = Button.Normal.Filled.Info.Fit;

const ArticleForm = ({ title, sumbitText, articleData, onSubmit }) => {
  return (
    <Form
      title={title}
      sumbitText={sumbitText}
      submitButton={submitButton}
      submitButtonProps={{ width: '319px' }}
      onSubmit={onSubmit}
    >
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
