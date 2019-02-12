import React, { useState, useEffect } from 'react';

export default ({ questions }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/read-answers')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <h2>Thank you :)</h2>
      <p>See yours and the average results</p>

      <ul>
        {questions.map(({ node: { frontmatter: { id, title, answers } } }) => (
          <li key={`question-result-${id}`}>
            <h2>{title}</h2>

            <ul>
              {answers.map(answer => (
                <li key={answer}>{answer}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
