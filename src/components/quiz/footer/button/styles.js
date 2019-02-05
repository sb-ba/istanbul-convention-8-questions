import css from 'styled-jsx/css';

import { colors } from '../../../../tokens';

export default css`
  button {
    background: ${colors.darkGrey};
    border: none;
    color: white;
    font-size: 0.9rem;
    padding: 0.5rem;
    text-transform: uppercase;
    width: 50%;
  }

  button:hover,
  button:focus {
    background-color: white;
    color: ${colors.brand};
  }

  button[disabled] {
    background: ${colors.darkGrey};
  }
`;
