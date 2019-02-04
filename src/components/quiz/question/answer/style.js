import css from 'styled-jsx/css';

import { colors } from '../../../../tokens';

export default css`
  .answer {
    color: white;
    padding: 1rem;
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
  }

  .index {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
