import css from 'styled-jsx/css';

import { colors } from '../../../../tokens';

export default css`
  button {
    background: ${colors.brand};
    border: none;
    border: 2px solid ${colors.brand};
    border-radius: 3px;
    color: white;
    font-size: 0.9rem;
    padding: 0.5rem;
  }

  button:hover,
  button:focus {
    background-color: white;
    color: ${colors.brand};
  }

  button[disabled] {
    background: white;
    border-color: rgb(227, 227, 227);
    color: rgb(227, 227, 227);
  }
`;
