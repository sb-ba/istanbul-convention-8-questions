/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';

import styles from './styles';

export default ({ frontmatter: { title, answers = [] } }) => (
  <div>
    <style jsx>{styles}</style>
    <h1 className="title">{title}</h1>

    {answers.map(answer => (
      <label>
        <input type="radio" />
        {answer}
      </label>
    ))}
  </div>
);
