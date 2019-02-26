import React, { Suspense } from 'react';

import style from './style';

const Slider = React.lazy(() => import('../question/slider'));

export default ({ introQuestion, title, intro, buttonLabel, onStart }) => (
  <article>
    <style jsx>{style}</style>

    <strong className="question">{introQuestion}</strong>

    <h1 className="title">{title}</h1>

    <div className="slider-container">
      <Suspense fallback={<div />}>
        <Slider
          trackStyle={[{ backgroundColor: 'rgb(125, 29, 8)' }]}
          railStyle={{ backgroundColor: 'rgb(166, 38, 9)' }}
          defaultValue={[33, 66]}
          max={100}
          min={0}
          disabled
        />
      </Suspense>
    </div>

    <p className="slider-intro">{intro}</p>

    <div className="button-container">
      <button type="button" onClick={onStart}>
        {buttonLabel}
      </button>
    </div>
  </article>
);
