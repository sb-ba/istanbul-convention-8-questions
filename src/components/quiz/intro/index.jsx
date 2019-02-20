import React from 'react';

import style from './style';

export default ({ title, intro, buttonLabel, onStart }) => (
  <article>
    <style jsx>{style}</style>

    <h1 className="title">{title}</h1>

    <p>{intro}</p>

    <div className="button-container">
      <button type="button" onClick={onStart}>
        {buttonLabel}
      </button>
    </div>
  </article>
);
