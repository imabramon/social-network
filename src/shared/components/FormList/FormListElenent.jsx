import React from 'react'
import { useFormContext } from 'react-hook-form'
import { HStack, Input } from '../../ui'
import Button from '../Button'
import useInput from '../../hooks/useInput'

export function FormListElement({
  value,
  onChange,
  onAdd,
  onDelete,
  scope,
  id,
  ...props
}) {
  const { register } = useFormContext()

  return (
    <HStack $gap="20px">
      <Input
        defaultValue={value}
        width="300px"
        {...props}
        {...register(`${scope}.${id}`, { onChange })}
      />
      <Button.Normal.Highlighted.Negative.Fit onClick={onDelete}>
        Delete
      </Button.Normal.Highlighted.Negative.Fit>
      {onAdd ? (
        <Button.Normal.Highlighted.Info.Fit onClick={onAdd}>
          Add tag
        </Button.Normal.Highlighted.Info.Fit>
      ) : null}
    </HStack>
  )
}
