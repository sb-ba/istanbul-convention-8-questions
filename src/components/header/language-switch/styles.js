import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../tokens';

export default css`
  .language-switch {
    font-family: ${fonts.openSans.family};
    font-size: 0.9rem;
    font-weight: ${fonts.openSans.weight.semibold};
    position: relative;
  }

  ul {
    background-color: ${colors.brand};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    left: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 100%;
  }

  li + li {
    margin-left: 0.5rem;
  }

  button {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0 1.15rem 0 0;
    position: relative;
    text-transform: uppercase;
  }

  button:hover,
  button:focus {
    color: white;
    cursor: pointer;
  }

  button::after {
    border-color: currentColor transparent transparent transparent;
    border-style: solid;
    border-width: 0.35rem 0.35rem 0 0.35rem;
    content: '';
    height: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }
`;

export const linkStyle = css.resolve`
  a {
    border-top: 1px solid currentColor;
    color: currentColor;
    display: block;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
