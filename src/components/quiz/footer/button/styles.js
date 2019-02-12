import css from 'styled-jsx/css';

import { colors, fonts } from '../../../../tokens';

export default css`
  button {
    background: ${colors.darkGrey};
    border: none;
    color: white;
    font-family: ${fonts.bitter.family};
    font-size: 1rem;
    padding: 0.5rem;
    text-transform: uppercase;
    width: 50%;
  }

  button + button {
    border-left: 1px solid white;
  }

  button:hover,
  button:focus {
    background-color: ${colors.red};
    cursor: pointer;
  }

  button[disabled] {
    color: rgb(152, 152, 152);
    opacity: 0.8;
  }

  button[disabled]:hover,
  button[disabled]:focus {
    background: ${colors.darkGrey};
    color: rgb(152, 152, 152);
    cursor: default;
  }
`;
