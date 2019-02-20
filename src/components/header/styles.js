import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../tokens';

export default css`
  header {
    align-items: center;
    background: ${colors.brand};
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .title,
  .title-council {
    line-height: 1;
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0.2rem;
  }

  .title {
    font-size: 1rem;
    font-family: ${fonts.bitter.family};
  }

  .title-council {
    font-family: ${fonts.openSans.family};
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;

export const linkStyles = css.resolve`
  a {
    color: currentColor;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const logoStyles = css.resolve`
  a {
    color: currentColor;
    font-size: 0.55rem;
    font-family: ${fonts.openSans.family};
    line-height: 1.25;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
