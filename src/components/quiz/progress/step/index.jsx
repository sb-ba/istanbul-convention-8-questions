import React from 'react';

import style from './style';

export default ({ active = false }) => (
  <div className={`step ${active && 'step--is-active'}`}>
    <style jsx>{style}</style>
  </div>
);
