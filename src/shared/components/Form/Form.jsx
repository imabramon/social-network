'use client';
import React from 'react';
import styled from 'styled-components';
import { Container, FormTitle, ProxyForm, VStack } from '../../ui';
import Button from '../Button';

const Form = ({
  children,
  formProps,
  sumbitText,
  onSubmit,
  sub,
  sup,
  title,
  submitButton,
  submitButtonProps,
}) => {
  const SubmitButton = submitButton;
  return (
    <Container paddingVertical="48px" paddingHorizontal="32px">
      <ProxyForm {...formProps} onSubmit={onSubmit}>
        <VStack gap="21px">
          <FormTitle>{title}</FormTitle>
          <VStack gap="12px">{children}</VStack>
          {sup}
          <SubmitButton {...submitButtonProps}>{sumbitText}</SubmitButton>
          {sub}
        </VStack>
      </ProxyForm>
    </Container>
  );
};

Form.defaultProps = {
  children: [],
  formProps: {},
  title: 'Форма',
  sumbitText: 'Отправить',
  onSubmit: () => {},
  sub: null,
  sup: null,
  submitButton: Button.Normal.Filled.Info.Wide,
};

export const FormStl = styled.div``;

export default Form;
