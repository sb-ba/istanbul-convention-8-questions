import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../tokens';

export default css`
  footer {
    background-color: ${colors.brand};
    color: white;
    font-family: ${fonts.openSans.family};
    padding: 1.5rem 1.5rem 5rem 1.5rem;
    text-align: center;
  }

  strong {
    font-weight: ${fonts.openSans.weight.extraBold};
  }

  p {
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }

  a {
    color: currentColor;
  }

  a:hover,
  a:focus {
    color: ${colors.darkGrey};
  }

  a + a {
    margin-left: 1rem;
  }

  .share {
    margin-bottom: 5rem;
    margin-top: 5rem;
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
`;

export const iwdIcon = css.resolve`
  svg {
    height: 6rem;
    margin-top: 5rem;
    width: 70%;
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
