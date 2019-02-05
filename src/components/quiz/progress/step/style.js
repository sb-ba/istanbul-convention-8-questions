import css from 'styled-jsx/css';

import { colors } from '../../../../tokens';

export default css`
  .step {
    flex: 1;
    height: 0.5rem;
  }

  .step + .step {
    margin-left: 0.1rem;
  }

  .step--is-active {
    background-color: ${colors.red};
  }
`;
