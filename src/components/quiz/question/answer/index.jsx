import React from 'react';

import style from './style';

const ALPHABET = ['A', 'B', 'C', 'D', 'E'];

export default ({ index = 0, children }) => (
  <div className={`answer answer--index-${ALPHABET[index].toLowerCase()}`}>
    <style jsx>{style}</style>

    <p>
      <strong className="index">{ALPHABET[index]}</strong>
      {children}
    </p>
  </div>
);
