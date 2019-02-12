import React, { useState, useEffect } from 'react';

import Answer from '../answer';
import CheckIcon from '../../../../static/icons/check-square.svg';
import Share from './share';

import style, { checkIconStyle } from './style';

export default ({ questions }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/read-answers')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="results-container">
      <style jsx>{style}</style>
      {checkIconStyle.styles}

      <header>
        <CheckIcon className={checkIconStyle.className} />

        <div className="intro-content">
          <h2 className="title">Thank you :)</h2>
          <p className="intro">See yours and the average results</p>
        </div>
      </header>

      <Share />

      <h2 className="answers-title">See yours and the average results</h2>

      <ul>
        {questions.map(
          ({
            node: {
              frontmatter: { id, title, answers },
              html: text
            }
          }) => (
            <li key={`question-result-${id}`}>
              <h2 className="question-title">{title}</h2>

              <ul>
                {answers.map((answer, index) => (
                  <Answer key={answer} index={index} theme="transparent">
                    {answer}
                  </Answer>
                ))}
              </ul>

              {text && (
                <div
                  className="convention-text"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
            </li>
          )
        )}
      </ul>

      <Share />
    </div>
  );
};
