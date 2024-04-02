import React from 'react';
import { HStack, Input } from '../../ui';
import Button from '../Button';

export const FormListElement = ({ value, onChange, onAdd, onDelete }) => {
  return (
    <HStack $gap="20px">
      <Input value={value} onChange={onChange} width="300px" />
      <Button.Normal.Highlighted.Negative.Fit onClick={onDelete}>
        Delete
      </Button.Normal.Highlighted.Negative.Fit>
      {onAdd ? (
        <Button.Normal.Highlighted.Info.Fit onClick={onAdd}>
          Add tag
        </Button.Normal.Highlighted.Info.Fit>
      ) : null}
    </HStack>
  );
};
