import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  article {
    background-color: white;
    font-family: ${fonts.openSans.family};
    font-size: 1rem;
    line-height: 1.4;
    padding: 0.5rem;
  }

  @media ${mq.desktop} {
    article {
      font-size: 1.2rem;
      padding: 2.5rem 5.5rem 8.5rem 5.5rem;
    }
  }

  h2,
  h3 {
    font-family: ${fonts.bitter.family};
    line-height: 1.2;
    margin-bottom: 1.5rem;
    margin-top: 3.5rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  a {
    color: currentColor;
    text-decoration: underline;
  }
`;
