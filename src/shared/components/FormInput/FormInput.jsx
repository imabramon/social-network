'use client';
import React from 'react';
import { Input, InputTitle, Label } from '../../ui';
import { useFormContext } from 'react-hook-form';
import { FormInputError } from './FormInputError';
import { withReactHookValidation } from '../../utils/validation';

const FormInput = ({ title, inputProps, titleProps, variant = {}, inputSlot, validation, value, autoComplete }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <Label>
      <InputTitle {...variant.titleProps} {...titleProps}>
        {title}
      </InputTitle>
      {inputSlot ? (
        inputSlot
      ) : (
        <Input
          {...variant.inputProps}
          {...inputProps}
          {...register(title, withReactHookValidation(watch, validation, title))}
          autoComplete={autoComplete}
          defaultValue={value}
        />
      )}
      <FormInputError error={errors[title]}>{errors?.[title]?.message}</FormInputError>
    </Label>
  );
};

FormInput.defaultProps = {
  inputSlot: undefined,
  invalidText: 'Invalid',
  validationConfig: {},
  variant: {
    validationConfig: {},
    dinamycValidate: () => ({}),
  },
  dinamycValidateConfig: {},
};

export const FormVariant = {
  Password: {
    inputProps: {
      type: 'password',
    },
  },
};

export default FormInput;
