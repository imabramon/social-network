'use client';
import React from 'react';
import styled from 'styled-components';
import { Container, FormTitle, ProxyForm, VStack } from '../../ui';
import Button from '../Button';
import { FormProvider, useForm } from 'react-hook-form';

const Form = ({
  children,
  formProps,
  sumbitText,
  sub,
  sup,
  title,
  submitButton,
  submitButtonProps,
  onSubmit: submitHandler,
}) => {
  const SubmitButton = submitButton;
  const methods = useForm();
  const { handleSubmit, getValues } = methods;
  return (
    <Container $paddingvertical="48px" $paddinghorizontal="32px">
      <FormProvider {...methods}>
        <ProxyForm {...formProps} onSubmit={handleSubmit(submitHandler(getValues()))}>
          <VStack $gap="21px">
            <FormTitle>{title}</FormTitle>
            <VStack $gap="12px">{children}</VStack>
            {sup}
            <SubmitButton {...submitButtonProps} type="submit">
              {sumbitText}
            </SubmitButton>
            {sub}
          </VStack>
        </ProxyForm>
      </FormProvider>
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
