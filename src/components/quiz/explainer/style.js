import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  article {
    font-family: ${fonts.openSans.family};
    padding: 1.5rem;
  }

  .title {
    font-size: 1rem;
  }

  ul {
    font-weight: ${fonts.openSans.weight.bold};
    padding-left: 1rem;
  }
`;
