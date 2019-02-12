import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  footer {
    background-color: ${colors.brand};
    color: white;
    font-family: ${fonts.openSans.family};
    padding: 1.5rem 1rem;
    text-align: center;
  }
`;
