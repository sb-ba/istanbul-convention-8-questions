import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  .question {
    color: ${colors.brand};
  }

  .title-container {
    display: flex;
    flex-direction: row;
  }

  .title {
    font-size: 1rem;
  }

  .current {
    margin-right: 1.5rem;
  }

  .slider-container {
    margin: 1.5rem 0;
  }
`;
