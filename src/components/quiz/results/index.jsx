import React, { useState, useEffect } from 'react';

import Answer from '../answer';
import CheckIcon from '../../../../static/icons/check-square.svg';
import Result from './result';
import Share from './share';

import style, { checkIconStyle } from './style';

const findAnswerResult = (questionId, answerIndex, answers) => {
  const question = answers.find(
    ({ questionId: answerQuestionId }) => answerQuestionId === questionId
  );

  return question && question[`answer${answerIndex}`];
};

export default ({ userAnswers, questions, title, action, compare }) => {
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
          <h2 className="title">{title}</h2>
        </div>
      </header>

      <Share />

      <h2 className="answers-title">{compare}</h2>

      <ul>
        {questions.map(
          ({
            node: {
              frontmatter: { id, title: questionTitle, answers },
              html: text
            }
          }) => (
            <li key={`question-result-${id}`}>
              <h2 className="question-title">{questionTitle}</h2>

              <ul>
                {answers.map((answer, index) => (
                  <>
                    <Answer key={answer} index={index} theme="transparent">
                      {answer}
                    </Answer>

                    {data && (
                      <>
                        <Result
                          index={index}
                          value={userAnswers[id][index]}
                          label="You"
                        />
                        <Result
                          index={index}
                          value={findAnswerResult(id, index + 1, data)}
                          label="Average"
                        />
                      </>
                    )}
                  </>
                ))}
              </ul>

              {/* eslint-disable react/no-danger */}
              {text && (
                <div
                  className="convention-text"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              {/* eslint-enable react/no-danger */}
            </li>
          )
        )}
      </ul>

      <h2 className="answers-title">{action}</h2>

      <Share />
    </div>
  );
};
