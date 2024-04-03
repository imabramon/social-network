'use client';
import React from 'react';
import styled from 'styled-components';
import { HiddenSpan, SubText } from '../../ui';

const Sup = styled.sup`
  ${SubText}
`;

const Icon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url('/like.svg');
  align-self: center;
`;

const LikesIcon = ({ value }) => {
  return (
    <LikesIconStl>
      <HiddenSpan>Likes count</HiddenSpan>
      <Icon />
      <Sup>{value}</Sup>
    </LikesIconStl>
  );
};

export const LikesIconStl = styled.span`
  display: inline-flex;
  gap: 5px;
`;

export default LikesIcon;
