import css from 'styled-jsx/css';

import { fonts, mq } from '../../../tokens';

export default css`
  article {
    font-family: ${fonts.openSans.family};
    padding: 1.5rem;
  }

  @media ${mq.desktop} {
    article {
      font-size: 1.2rem;
    }
  }

  .title {
    font-size: inherit;
  }

  ul {
    font-weight: ${fonts.openSans.weight.bold};
    padding-left: 1rem;
  }
`;
