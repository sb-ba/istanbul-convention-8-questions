import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  :global(html) {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

  :global(body) {
    background: ${colors.brand};
    margin: 0;
    padding: 0;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }
`;
