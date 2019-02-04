import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../tokens';

export default css`
  header {
    background: ${colors.brand};
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const linkStyles = css.resolve`
  a {
    color: currentColor;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
