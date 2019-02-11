import css from 'styled-jsx/css';

import { colors, fonts } from '../../../tokens';

export default css`
  .question {
    color: ${colors.brand};
  }

  .title-container {
    display: flex;
    flex-direction: row;
  }

  .title {
    font-family: ${fonts.openSans.family};
    font-size: 1rem;
  }

  .current {
    font-family: ${fonts.bitter.family};
    font-size: 2.5rem;
    margin-right: 1.5rem;
  }

  .slider-container {
    margin: 1.5rem 0;
  }

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
