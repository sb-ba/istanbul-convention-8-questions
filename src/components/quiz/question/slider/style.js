import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../../../tokens';

export default css`
  .slider-container {
    position: relative;
  }

  .slider-last-track {
    background-color: ${colors.answer3};
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    z-index: 5;
  }

  .hand-icon {
    left: 33%;
    position: absolute;
    top: 90%;
    transform: translateX(-50%) rotate(-10deg);
    z-index: 50;
  }
`;

export const handIcon = css.resolve`
  svg {
    height: 2rem;
    transform: rotate(-10deg);
    width: 2rem;
  }
`;
