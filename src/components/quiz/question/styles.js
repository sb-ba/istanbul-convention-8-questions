import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  .title {
    color: ${colors.brand};
    font-size: 1.4rem;
  }

  label {
    display: block;
  }

  label + label {
    margin-top: 1rem;
  }
`;
