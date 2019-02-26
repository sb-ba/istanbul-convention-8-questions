import css from 'styled-jsx/css';

import { colors, fonts } from '../../../tokens';

export default css`
  article {
    background-color: ${colors.red};
    border: 5px solid white;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${fonts.openSans.family};
    height: 92.2vh;
    padding: 1rem 1.5rem;
    text-align: center;
  }

  .question {
    display: block;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    line-height: 1.25;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }

  .title {
    font-family: ${fonts.bitter.family};
    font-size: 2.25rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .button-container {
    margin-top: 3rem;
  }

  button {
    appearance: none;
    background: white;
    border: 2px solid white;
    color: black;
    font-family: ${fonts.bitter.family};
    font-size: 1.25rem;
    padding: 0.45rem 2rem;
    text-transform: uppercase;
    width: auto;
  }

  button:hover,
  button:focus {
    background-color: ${colors.red};
    color: white;
    cursor: pointer;
  }
`;
