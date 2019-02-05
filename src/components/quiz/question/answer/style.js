import css from 'styled-jsx/css';

import { colors } from '../../../../tokens';

export default css`
  .answer {
    color: white;
    padding: 1rem;
    position: relative;
  }

  .answer + .answer {
    margin-top: 0.5rem;
  }

  .answer--index-a {
    background-color: ${colors.answer1};
  }

  .answer--index-b {
    background-color: ${colors.answer2};
  }

  .answer--index-c {
    background-color: ${colors.answer3};
  }

  p {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
    z-index: 2;
  }

  .index {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .progress {
    background-color: red;
    left: 0;
    position: absolute;
    top: 0;
    height: 100%;
  }

  .answer--index-a .progress {
    background-image: linear-gradient(to right, #123751, #0e2b3f);
  }

  .answer--index-b .progress {
    background-image: linear-gradient(to right, #00838f, #01737e);
  }

  .answer--index-c .progress {
    background-image: linear-gradient(to right, #1b7eac, #16688e);
  }
`;
