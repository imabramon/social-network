'use client';
import React, { useReducer } from 'react';
// import styled from 'styled-components';
import { InputTitle, VStack } from '../../ui';
import useInput from '../../hooks/useInput';
import { FormListElement } from './FormListElenent';
import { inputsReducer } from './inputReducer';
import { inputActions } from './inputActions';
import { withDispatch } from './withDispatch';
import { useFormContext } from 'react-hook-form';

const FormList = ({ title, value }) => {
  const mappedValue = value.map((value) => ({ value }));
  const tags = [...mappedValue];
  const lastTag = tags.pop()?.value ?? '';

  const [inputs, dispatchInputs] = useReducer(inputsReducer, tags);
  const { add, remove, change } = withDispatch(inputActions, dispatchInputs);

  const [lastInput, onLastInputChange, clearLastInput, setLastInput] = useInput(lastTag, '');
  const savedInputs = inputs.map(({ value }, index) => {
    return (
      <FormListElement
        id={index}
        scope={title}
        key={index}
        value={value}
        onDelete={() => {
          remove(index);
        }}
        onChange={(evt) => {
          const value = evt.target.value;
          change(index, value);
        }}
      />
    );
  });

  const lastInputElement = (
    <FormListElement
      id={inputs.length}
      scope={title}
      value={lastInput}
      onAdd={() => {
        if (lastInput.trim() === '') {
          return;
        }

        add(lastInput);
        clearLastInput();
      }}
      onDelete={() => {
        if (inputs.length === 0) {
          clearLastInput();
          return;
        }

        const { value } = inputs[inputs.length - 1];
        setLastInput(value);
        remove(inputs.length - 1);
      }}
      onChange={onLastInputChange}
    />
  );

  const inputElements = [...savedInputs, lastInputElement];

  return (
    <VStack $gap="5px">
      <InputTitle>{title}</InputTitle>
      {inputElements}
    </VStack>
  );
};

export default FormList;
