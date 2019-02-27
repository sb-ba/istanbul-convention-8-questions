import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mq } from '../../../tokens';

export default css`
  nav {
    align-items: center;
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

  @media ${mq.desktop} {
    .label {
      display: inline-block;
      position: absolute;
      top: 50%;
      transform-origin: 50% 50%;
    }

    .label--next {
      left: 0;
      transform: translateY(-50%) rotate(-90deg);
    }

    .label--previous {
      right: -0.5rem;
      transform: translateY(-50%) rotate(90deg);
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

  @media ${mq.desktop} {
    svg {
      height: 1.5rem;
      left: 1.5rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 1.5rem;
    }
  }
`;

export const iconStylesPrevious = css.resolve`
  svg {
    margin-left: 0;
    margin-right: 1rem;
  }

  @media ${mq.desktop} {
    svg {
      height: 1.5rem;
      left: auto;
      position: absolute;
      right: 1.5rem;
      width: 1.5rem;
    }
  }
`;
