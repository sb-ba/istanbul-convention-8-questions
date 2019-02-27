import css from 'styled-jsx/css';

import { colors, fonts } from '../../../../tokens';

export default css`
  .result {
    color: white;
    font-size: 0;
    line-height: 1;
    padding: 0.55rem 1rem 0.55rem 1rem;
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

  .label,
  .value {
    display: inline-block;
    font-family: ${fonts.openSans.family};
    line-height: 1;
    margin-bottom: 0;
    margin-top: 0;

    text-transform: uppercase;
    vertical-align: middle;
    z-index: 10;
  }

  .label {
    font-size: 0.75rem;
    margin-right: 1rem;
    position: relative;
    top: 0.05rem;
  }

  .value {
    font-size: 1.1rem;
    position: absolute;
    top: 50%;
    transform: translate(1rem, -50%);
  }
`;
