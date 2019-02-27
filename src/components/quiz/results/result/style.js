import css from 'styled-jsx/css';

import { colors, fonts } from '../../../../tokens';

export default css`
  .result {
    color: white;
    padding: 0.5rem;
    position: relative;
  }

  .result + .result {
    margin-top: 0.5rem;
  }

  .result--index-0,
  .result--index-2 {
    background-color: ${colors.answer1};
  }

  .result--index-1 {
    background-color: ${colors.answer2};
  }

  .progress {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
  }

  .result--index-0 .progress {
    background-image: linear-gradient(to right, transparent, #0e2b3f);
  }

  .result--index-1 .progress {
    background-image: linear-gradient(to right, transparent, #01646d);
  }

  .result--index-2 .progress {
    background-image: linear-gradient(to right, transparent, #16688e);
  }

  .label {
    font-family: ${fonts.openSans.family};
    font-size: 0.75rem;
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
    text-transform: uppercase;
    z-index: 10;
  }
`;
