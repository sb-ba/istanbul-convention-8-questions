import css from 'styled-jsx/css';

import { colors, mq } from '../../tokens';

export default css`
  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${colors.lightGrey};
    margin: 0;
    padding: 0;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(:focus:not(:focus-visible)) {
    outline: none;
  }

  @font-face {
    font-family: 'Bitter';
    font-display: swap;
    font-weight: 700;
    src: url('/fonts/bitter/bitter-bold.woff2') format('woff2'),
      url('/fonts/bitter/bitter-bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-display: swap;
    font-weight: 600;
    src: url('/fonts/open-sans/open-sans-semibold.woff2') format('woff2'),
      url('/fonts/open-sans/open-sans-semibold.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-display: swap;
    font-weight: 700;
    src: url('/fonts/open-sans/open-sans-bold.woff2') format('woff2'),
      url('/fonts/open-sans/open-sans-bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-display: swap;
    font-weight: 800;
    src: url('/fonts/open-sans/open-sans-extrabold.woff2') format('woff2'),
      url('/fonts/open-sans/open-sans-extrabold.woff') format('woff');
  }

  @media ${mq.desktop} {
    .app {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .app__constraint {
      width: 60rem;
    }
  }
`;
