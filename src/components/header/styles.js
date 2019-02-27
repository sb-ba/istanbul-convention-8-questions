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
    padding: 0.5rem 1rem 0.35rem 1rem;
    position: relative;
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
    display: inline-block;
    width: 2rem;
  }
`;

export const logoStyles = css.resolve`
  svg {
    height: 1.55rem;
    width: 100%;
  }
`;
