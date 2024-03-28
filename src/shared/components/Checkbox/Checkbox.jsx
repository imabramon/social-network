"use client";
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;

  width: 100%;
  background-color: white;

  &:before {
    position: relative;
    content: url('/checkbox.svg');
    width: 16px;
    height: 16px;
  }

  &:has(:checked)::before {
    content: url('/checkbox--checked.svg');
  }
`;
const CheckboxAtom = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
const LabelTitle = styled.span`
  padding-left: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #4a4a4a;
`;

const Checkbox = ({name, checked = true}) => {
	return (
		<Label>
			<CheckboxAtom checked={checked}/>
			<LabelTitle>{name}</LabelTitle>
      	</Label>
	);
};


export default Checkbox;