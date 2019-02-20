import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../tokens';

export default css`
  .results-container {
    margin: 1.5rem 0.5rem 0 0.5rem;
  }

  header {
    align-items: center;
    display: flex;
    color: ${colors.red};
    flex-direction: row;
    font-family: ${fonts.openSans.family};
    justify-content: center;
    margin-bottom: 2rem;
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
    margin-bottom: 2rem;
    margin-top: 2.5rem;
    text-align: center;
  }

  .question-title {
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-family: ${fonts.openSans.family};
    font-size: 1.1rem;
    line-height: 1.4;
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 1.5rem 1rem;
  }

  .question-title-inner {
    flex: 1;
  }

  .question-index {
    align-content: center;
    background-color: black;
    border-radius: 50%;
    color: white;
    display: flex;
    flex: 0 1 auto;
    font-family: ${fonts.bitter.family};
    font-size: 1.875rem;
    height: 2.5rem;
    justify-content: center;
    line-height: 2.25rem;
    margin-right: 0.75rem;
    width: 2.5rem;
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
    margin-bottom: 5rem;
    margin-top: 2rem;
    padding: 1.5rem;
  }

  .results-data-container {
    margin-bottom: 1.5rem;
  }

  .explainer {
    background-color: ${colors.lightGrey};
    font-family: ${fonts.openSans.family};
    font-size: 1rem;
    font-weight: ${fonts.openSans.weight.semiBold};
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    padding: 0.5rem;
  }

  :global(.explainer strong) {
    display: block;
    margin-bottom: 0.5rem;
  }

  :global(.explainer a) {
    color: currentColor;
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
