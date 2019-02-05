import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default css`
  ul {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
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
