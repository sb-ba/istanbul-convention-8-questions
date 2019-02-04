/* eslint-disable import/prefer-default-export */

import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../tokens';

export const linkStyles = css.resolve`
  a {
    background-color: white;
    border-radius: 3px;
    color: ${colors.brand};
    display: inline-block;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
  }
`;
