import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../../tokens';

export default css`
  section {
    background-color: ${colors.green};
    color: white;
    padding: 1rem;
    text-align: center;
  }

  .title {
    font-family: ${fonts.openSans.family};
    font-size: 1rem;
    font-weight: ${fonts.openSans.weight.bold};
    margin-bottom: 1.5rem;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const shareIconStyle = css.resolve`
  svg {
    height: 2.25rem;
    width: 2.25rem;
  }

  svg + svg {
    margin-left: 1.25rem;
  }
`;
