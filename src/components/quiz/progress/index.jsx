import React from 'react';

import Step from './step';

import style from './style';

export default ({ current, total }) => {
  const steps = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index <= total; ++index) {
    steps.push(<Step active={index <= current} />);
  }

  return (
    <div className="progress">
      <style jsx>{style}</style>

      {steps}
    </div>
  );
};
