import classnames from 'classnames';
import React from 'react';

import style from './style';

const ALPHABET = ['A', 'B', 'C', 'D', 'E'];

export default ({ index = 0, result, children, theme, ...rest }) => (
  <div
    className={classnames(
      'answer',
      `answer--index-${ALPHABET[index].toLowerCase()}`,
      { [`answer--theme-transparent`]: theme === 'transparent' }
    )}
    {...rest}
  >
    <style jsx>{style}</style>

    {result !== 0 && (
      <div className="progress" style={{ width: `${result}%` }} />
    )}

    <p>
      <strong className="index">{ALPHABET[index]}</strong>
      {children}
    </p>
  </div>
);
