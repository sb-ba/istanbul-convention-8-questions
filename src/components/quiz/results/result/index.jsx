import classnames from 'classnames';
import React from 'react';

import style from './style';

export default ({ value, index, label }) => (
  <div className={classnames('result', `result--index-${index}`)}>
    <style jsx>{style}</style>

    <div className="progress" style={{ width: `${value}%` }} />
    <p className="label">
      {label}: {value}%
    </p>
  </div>
);
