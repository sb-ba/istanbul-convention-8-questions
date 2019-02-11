import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default css`
  .language-switch {
    position: relative;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    left: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 100%;
    width: 100%;
  }

  li + li {
    margin-left: 0.5rem;
  }
`;

export const linkStyle = css.resolve`
  a {
    color: currentColor;
    text-decoration: none;
  }
`;
