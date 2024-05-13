'use client'

import React from 'react'
import styled from 'styled-components'
import { FormProvider, useForm } from 'react-hook-form'
import { Container, FormTitle, ProxyForm, VStack } from '../../ui'
import Button from '../Button'

const mapKeysToTitle = {
  username: 'Username',
  email: 'Email address',
  'email or password': 'Email',
}

const mapErrorMessege = (field, error) => {
  switch (field) {
    case 'email or password':
      return `${field} ${error}`
    default:
      return error
  }
}

function Form({
  children,
  formProps,
  sumbitText,
  sub,
  sup,
  title,
  submitButton,
  submitButtonProps,
  onSubmit: submitHandler,
}) {
  const SubmitButton = submitButton
  const methods = useForm()
  const { handleSubmit, setError, formState, reset } = methods
  return (
    <Container $paddingvertical="48px" $paddinghorizontal="32px">
      <FormProvider {...methods}>
        <ProxyForm
          {...formProps}
          onChange={() => reset(null, { keepValues: true, keepErrors: true })}
          onSubmit={handleSubmit(async (...args) => {
            try {
              await submitHandler(...args)
            } catch (e) {
              const {
                response: {
                  data: { errors },
                },
              } = e
              // eslint-disable-next-line no-restricted-syntax
              for (const [field, errorMessege] of Object.entries(errors)) {
                const mappedField = mapKeysToTitle[field]
                setError(mappedField, {
                  type: 'custom',
                  message: mapErrorMessege(field, errorMessege),
                })
              }
            }
          })}
        >
          <VStack $gap="21px">
            <FormTitle>{title}</FormTitle>
            <VStack $gap="12px">{children}</VStack>
            {sup}
            <SubmitButton
              {...submitButtonProps}
              type="submit"
              disabled={formState.isSubmitted}
            >
              {sumbitText}
            </SubmitButton>
            {sub}
          </VStack>
        </ProxyForm>
      </FormProvider>
    </Container>
  )
}

Form.defaultProps = {
  children: [],
  formProps: {},
  title: 'Форма',
  sumbitText: 'Отправить',
  onSubmit: () => {},
  sub: null,
  sup: null,
  submitButton: Button.Normal.Filled.Info.Wide,
}

export const FormStl = styled.div``

export default Form
