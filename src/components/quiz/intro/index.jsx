import React from 'react';

import style from './style';

export default ({ onStart }) => (
  <article>
    <style jsx>{style}</style>

    <h1 className="title">8 Questions for the 8th of March</h1>

    <p>
      On International Women’s Day we want to know what you think is the best
      thing about the Istanbul Convention.
    </p>

    <div className="button-container">
      <button type="button" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  </article>
);
