import css from 'styled-jsx/css';

import { colors, fonts } from '../../../../tokens';

export default css`
  .numbered-results {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
  }

  .result {
    color: ${colors.red};
    flex: 1;
    font-family: ${fonts.openSans.family};
    font-size: 0.875rem;
    font-weight: ${fonts.openSans.weight.bold};
    text-align: center;
  }
`;
