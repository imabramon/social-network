'use client';
import React from 'react';
import styled from 'styled-components';
import { HStack } from '../../ui';
import Button from '../Button';

const ButtonNoBorder = Button.Small.NoBorder.Neutral.Fit;
const ButtonFilled = Button.Small.Filled.Info.Fit;
const Arrow = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
`;
const ArrowLeft = styled(Arrow)`
  background: url('/arrow-left.svg');
`;
const ArrowRight = styled(Arrow)`
  background: url('/arrow-right.svg');
`;

const makeButtonsNumeration = (count, maxCount, current) => {
  switch (true) {
    case count > maxCount:
      return { start: 1, length: maxCount };
    case count + current <= maxCount:
      return { start: current, length: count };
    default:
      return { start: maxCount - count + 1, length: count };
  }
};

const Pagination = ({ buttonsCount, maxPage, current, onPageChange: pageChangeHandler }) => {
  const { start, length } = makeButtonsNumeration(buttonsCount, maxPage, current);

  const buttons = Array.from({ length })
    .fill(0)
    .map((_, index) => {
      const buttonNumber = start + index;

      if (buttonNumber === current) {
        return <ButtonFilled key={index}>{buttonNumber}</ButtonFilled>;
      }

      return (
        <ButtonNoBorder
        key={index}
          onClick={() => {
            pageChangeHandler(buttonNumber);
          }}
        >
          {buttonNumber}
        </ButtonNoBorder>
      );
    });

  return (
    <HStack width="fit-content">
      <ButtonNoBorder disabled={current === 1} onClick={() => pageChangeHandler(current - 1)}>
        <ArrowLeft />
      </ButtonNoBorder>
      {buttons}
      <ButtonNoBorder disabled={current === maxPage} onClick={() => pageChangeHandler(current + 1)}>
        <ArrowRight />
      </ButtonNoBorder>
    </HStack>
  );
};

Pagination.defaultProps = {
  buttonsCount: 5,
  maxPage: 1,
};

export default Pagination;
