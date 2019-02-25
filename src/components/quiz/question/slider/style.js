import css from 'styled-jsx/css';

export default css`
  .slider-container {
    position: relative;
  }

  .slider-last-track {
    background-color: red;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    z-index: 5;
  }
`;
