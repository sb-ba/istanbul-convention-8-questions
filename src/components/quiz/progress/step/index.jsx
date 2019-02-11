import React from 'react';

import style from './style';

export default ({ active = false, ...rest }) => (
  <div className={`step ${active && 'step--is-active'}`} {...rest}>
    <style jsx>{style}</style>
  </div>
);
