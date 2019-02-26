import React from 'react';

import style from './style';

export default ({ introQuestion, title, intro, buttonLabel, onStart }) => (
  <article>
    <style jsx>{style}</style>

    <strong className="question">{introQuestion}</strong>

    <h1 className="title">{title}</h1>

    <p>{intro}</p>

    <div className="button-container">
      <button type="button" onClick={onStart}>
        {buttonLabel}
      </button>
    </div>
  </article>
);
