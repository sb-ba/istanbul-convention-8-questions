/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';

import Answer from './answer';
import Slider from './slider';

import styles from './styles';

export default ({ currentQuestion, frontmatter: { title, answers = [] } }) => (
  <div className="question">
    <style jsx>{styles}</style>

    <h1 className="title-container">
      <div className="current">{currentQuestion}</div>

      <div className="title">{title}</div>
    </h1>

    <div className="slider-container">
      <Slider />
    </div>

    {answers.map((answer, index) => (
      <Answer index={index}>{answer}</Answer>
    ))}
  </div>
);
