import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mq } from '../../../tokens';

export default css`
  nav {
    align-items: center;
    background: white;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  @media ${mq.desktop} {
    nav {
      position: static;
    }
  }
`;

export const iconStyles = css.resolve`
  svg {
    height: 0.9rem;
    margin-left: 1rem;
    transform: translateY(-0.05rem);
    vertical-align: middle;
    width: 0.9rem;
  }
`;

export const iconStylesPrevious = css.resolve`
  svg {
    margin-left: 0;
    margin-right: 1rem;
  }
`;
