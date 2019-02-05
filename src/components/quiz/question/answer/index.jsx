import React from 'react';

import style from './style';

const ALPHABET = ['A', 'B', 'C', 'D', 'E'];

export default ({ index = 0, result = 0, children }) => (
  <div className={`answer answer--index-${ALPHABET[index].toLowerCase()}`}>
    <style jsx>{style}</style>

    <div className="progress" style={{ width: `${result}%` }} />

    <p>
      <strong className="index">{ALPHABET[index]}</strong>
      {children}
    </p>
  </div>
);
