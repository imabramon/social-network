'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { css } from 'styled-components'
import { Input, InputTitle, Label } from '../../ui'
import { FormInputError } from './FormInputError'
import { withReactHookValidation } from '../../utils/validation'

function FormInput({
  title,
  inputProps,
  titleProps,
  variant = {},
  inputSlot,
  validation,
  value,
  autoComplete,
}) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  return (
    <Label>
      <InputTitle {...variant.titleProps} {...titleProps}>
        {title}
      </InputTitle>
      {inputSlot || (
        <Input
          {...variant.inputProps}
          {...inputProps}
          {...register(
            title,
            withReactHookValidation(watch, validation, title)
          )}
          autoComplete={autoComplete}
          defaultValue={value}
          placeholder={title}
          $borderColor={errors[title] ? '#f5222d' : 'no-change'}
        />
      )}
      <FormInputError error={errors[title]}>
        {errors?.[title]?.message}
      </FormInputError>
    </Label>
  )
}

FormInput.defaultProps = {
  inputSlot: undefined,
  invalidText: 'Invalid',
  validationConfig: {},
  variant: {
    validationConfig: {},
    dinamycValidate: () => ({}),
  },
  dinamycValidateConfig: {},
}

export const FormInputVariant = {
  Password: {
    inputProps: {
      type: 'password',
    },
  },
}

export default FormInput
