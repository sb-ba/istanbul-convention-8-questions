import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../tokens';

export default css`
  .results-container {
    margin: 1.5rem 1rem 0 1rem;
  }

  header {
    align-items: flex-start;
    display: flex;
    color: ${colors.red};
    flex-direction: row;
    font-family: ${fonts.openSans.family};
    justify-content: center;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }

  .answers-title,
  .title {
    font-size: 1rem;
    font-weight: ${fonts.openSans.weight.bold};
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }

  .answers-title {
    color: ${colors.red};
    font-family: ${fonts.openSans.family};
    text-align: center;
  }

  .intro {
    font-size: 0.8rem;
    margin: 0;
  }

  .question-title {
    background-color: ${colors.darkGrey};
    color: white;
    font-family: ${fonts.openSans.family};
    font-size: 1rem;
    line-height: 1.4;
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 1.5rem 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const checkIconStyle = css.resolve`
  svg {
    height: 2rem;
    margin-right: 1rem;
    width: 2rem;
  }
`;
