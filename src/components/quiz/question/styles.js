import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../tokens';

export default css`
  .question {
    color: black;
  }

  .title-container {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .title {
    font-family: ${fonts.openSans.family};
    font-size: 1.05rem;
    line-height: 1.2;
  }

  .current {
    font-family: ${fonts.bitter.family};
    font-size: 2.5rem;
    line-height: 1;
    margin-right: 1.5rem;
    padding-left: 0.5rem;
  }

  .slider-container {
    margin: 2rem 0 1.75rem 0;
  }

  .numbered-results {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
  }

  .result {
    color: ${colors.red};
    flex: 1;
    font-family: ${fonts.openSans.family};
    font-size: 0.875rem;
    font-weight: ${fonts.openSans.weight.bold};
    text-align: center;
  }
`;

export const sliderFallbackStyles = css.resolve`
  height: 5.5rem;
`;
