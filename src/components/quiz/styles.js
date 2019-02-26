import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  main {
    background-color: white;
    position: relative;
  }

  .question-container {
    margin: 1.5rem 1rem 0 1rem;
    min-height: 85vh;
    padding-bottom: 5rem; /* accommodate the buttons */
  }

  @media ${mq.desktop} {
    .question-container {
      min-height: 0;
      padding: 2rem 5rem 8rem 5rem;
    }
  }
`;
