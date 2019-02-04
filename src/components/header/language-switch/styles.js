import css from 'styled-jsx/css';

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

  a {
    color: currentColor;
    text-decoration: none;
  }
`;
