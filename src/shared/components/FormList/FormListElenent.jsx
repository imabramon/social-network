import React from 'react';
import { HStack, Input } from '../../ui';
import Button from '../Button';
import { useFormContext } from 'react-hook-form';
import useInput from '../../hooks/useInput';

export const FormListElement = ({ value, onChange, onAdd, onDelete, scope, id }) => {
  const { register } = useFormContext();

  return (
    <HStack $gap="20px">
      <Input defaultValue={value} width="300px" {...register(`${scope}.${id}`, { onChange })} />
      <Button.Normal.Highlighted.Negative.Fit onClick={onDelete}>Delete</Button.Normal.Highlighted.Negative.Fit>
      {onAdd ? <Button.Normal.Highlighted.Info.Fit onClick={onAdd}>Add tag</Button.Normal.Highlighted.Info.Fit> : null}
    </HStack>
  );
};
