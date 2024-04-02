'use client';
// import React from 'react';
import styled, { css } from 'styled-components';
import { makeComponentTree } from '../../utils/makeComponentTree';
import { withProps } from '../../utils/withProps';

const ButtonReset = styled.button.attrs((props) => ({
  type: props.type ?? 'button',
}))`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  appearance: none;
`;

const ButtonAtom = styled(ButtonReset)`
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
`;

// Size mixins

const Small = css`
  font-size: 14px;
  line-height: 12px;
  --padding-horizontal: 8px;
  --padding-vertical: 4px;
`;

const Normal = css`
  font-size: 16px;
  line-height: 24px;
  --padding-horizontal: 8px;
  --padding-vertical: 8px;
`;

const Large = css`
  font-size: 18px;
  line-height: 28px;
  --padding-horizontal: 8px;
  --padding-vertical: 8px;
`;

// Paint mode mixins

const Highlighted = css`
  --highlight-color-value: var(--theme-color, black);
  border: 1px solid;
  border-color: var(--highlight-color-value);
  color: var(--highlight-color-value);
`;

const NoBorder = css`
  --text-color-value: var(--theme-color, black);
  color: var(--text-color-value);
`;

const Filled = css`
  --fill-color-value: var(--theme-color, black);
  --text-color-value: var(--theme-contrast-color, white);
  background-color: var(--fill-color-value);
  color: var(--text-color-value);
`;

// Theme mixins

const Action = css`
  --theme-color: #52c41a;
  --theme-contrast-color: white;
`;

const Negative = css`
  --theme-color: #f5222d;
  --theme-contrast-color: white;
`;

const Info = css`
  --theme-color: #1890ff;
  --theme-contrast-color: white;
`;

const Neutral = css`
  --theme-color: #000000bf;
  --theme-contrast-color: white;
`;

// width mixins

const Fit = css`
  width: ${withProps('width', 'fit-content')};
  height: fit-content;
  padding: var(--padding-vertical) var(--padding-horizontal);
`;

const Wide = css`
  width: ${(props) => props.width ?? 'auto'};
  text-align: center;
  height: fit-content;
  padding-top: var(--padding-vertical);
  padding-bottom: var(--padding-vertical);
`;

/*
    Usage:

	<Button.$size.$paintOption.$theme.$widthOption>

	Examples:

	<Button.Normal.Highlighted.Info.Fit>
*/

const Button = makeComponentTree(ButtonAtom, [
  {
    Normal,
    Small,
    Large,
  },
  {
    Highlighted,
    NoBorder,
    Filled,
  },
  {
    Negative,
    Info,
    Action,
    Neutral,
  },
  {
    Fit,
    Wide,
  },
]);

export default Button;
