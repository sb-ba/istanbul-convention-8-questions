import css from 'styled-jsx/css';

import { colors } from '../../../tokens';

export default css`
  header {
    background: ${colors.brand};
    color: white;
    padding: 1rem;
  }

  .nav-link {
    color: currentColor;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
