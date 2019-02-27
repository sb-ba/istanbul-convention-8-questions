import classnames from 'classnames';
import React from 'react';

import style from './style';

const normalizePosition = value => {
  if (value < 15) {
    return 15;
  }

  if (value > 75) {
    return 75;
  }

  return value;
};

export default ({ value, index, label }) => (
  <div className={classnames('result', `result--index-${index}`)}>
    <style jsx>{style}</style>

    <div className="progress" style={{ width: `${value}%` }} />
    <p className="label">{label}</p>

    <p className="value" style={{ left: `${normalizePosition(value)}%` }}>
      {value}%
    </p>
  </div>
);
