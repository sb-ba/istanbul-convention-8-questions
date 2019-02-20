import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../tokens';

export default css`
  .results-container {
    margin: 1.5rem 0.5rem 0 0.5rem;
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
    color: ${colors.red};
    font-family: ${fonts.bitter.family};
    font-size: 1.75rem;
    font-weight: ${fonts.bitter.weight.bold};
    margin-bottom: 0;
    margin-top: 0;
  }

  .answers-title {
    margin-top: 2.5rem;
    text-align: center;
  }

  .question-title {
    color: black;
    font-family: ${fonts.openSans.family};
    font-size: 1.1rem;
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

  .convention-text {
    background-color: ${colors.brand};
    color: white;
    font-family: ${fonts.openSans.family};
    font-size: 1rem;
    font-weight: ${fonts.openSans.weight.semiBold};
    line-height: 1.4;
    margin-top: 2rem;
    padding: 1.5rem;
  }

  :global(.convention-text > *:first-child) {
    margin-top: 0;
  }

  :global(.convention-text > *:last-child) {
    margin-bottom: 0;
  }
`;

export const checkIconStyle = css.resolve`
  svg {
    height: 2rem;
    margin-right: 1rem;
    width: 2rem;
  }
`;
