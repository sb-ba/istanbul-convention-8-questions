import css from 'styled-jsx/css';

import { colors } from '../../../../tokens';

export default css`
  .slider-container {
    position: relative;
  }

  .slider-last-track {
    background-color: ${colors.answer3};
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    z-index: 5;
  }
`;
