import css from 'styled-jsx/css';

import { colors } from '../../../../tokens';

export default css`
  .step {
    flex: 1;
    height: 0.35rem;
  }

  .step + .step {
    margin-left: 0.15rem;
  }

  .step--is-active {
    background-color: ${colors.red};
  }
`;
