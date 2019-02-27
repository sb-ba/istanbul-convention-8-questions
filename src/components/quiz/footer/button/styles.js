import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../../../tokens';

export default css`
  button {
    background: ${colors.darkGrey};
    border: none;
    color: white;
    font-family: ${fonts.bitter.family};
    font-size: 1rem;
    letter-spacing: 0.02rem;
    outline: none;
    padding-bottom: 0.85rem;
    padding-top: 0.85rem;
    text-transform: uppercase;
    user-select: none;
    width: 50%;
  }

  @media ${mq.desktop} {
    button {
      border-radius: 50%;
      font-size: 0.8rem;
      height: 12rem;
      left: -8rem;
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 12rem;
      z-index: 10;
    }

    button + button {
      left: auto;
      right: -8rem;
    }
  }

  button + button {
    border-left: 1px solid white;
  }

  button:hover,
  button:focus {
    background-color: ${colors.red};
    cursor: pointer;
  }

  button:active {
    background: ${colors.darkGrey};
  }

  button[disabled] {
    color: rgb(134, 134, 134);
  }

  button[disabled]:hover,
  button[disabled]:focus {
    background: ${colors.darkGrey};
    color: rgb(134, 134, 134);
    cursor: default;
  }
`;
