import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../tokens';

export default css`
  footer {
    background-color: ${colors.brand};
    color: white;
    font-family: ${fonts.openSans.family};
    padding: 1.5rem 1rem;
    text-align: center;
  }

  .share {
    margin-bottom: 5rem;
  }

  .share-title {
    display: block;
    margin-bottom: 1rem;
  }
`;

export const shareIcon = css.resolve`
  svg {
    height: 2rem;
    width: 2rem;
  }

  svg + svg {
    margin-left: 1rem;
  }
`;

export const iwdIcon = css.resolve`
  svg {
    height: 10rem;
    margin-top: 5rem;
    width: 100%;
  }
`;

export const coeLogo = css.resolve`
  svg {
    height: 4rem;
    margin-top: 5rem;
    width: 100%;
  }
`;

export const link = css.resolve`
  a {
    color: currentColor;
    text-decoration: underline;
  }
`;
