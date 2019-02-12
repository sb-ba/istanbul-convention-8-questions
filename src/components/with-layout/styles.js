import css from 'styled-jsx/css';

export default css`
  :global(body) {
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Bitter';
    font-display: swap;
    font-weight: 700;
    src: url('/fonts/bitter/bitter.woff2') format('woff2'),
      url('/fonts/bitter/bitter.woff') format('woff');
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
`;
