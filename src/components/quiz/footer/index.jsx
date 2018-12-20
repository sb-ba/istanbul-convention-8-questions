import React from 'react';

import Button from './button';

import styles from './styles';

export default ({
  showPrevious,
  showNext,
  previous,
  next,
  currentQuestion,
  totalQuestions
}) => (
  <nav>
    <style jsx>{styles}</style>

    <Button
      onClick={event => {
        event.preventDefault();
        previous();
      }}
      disabled={!showPrevious}
    >
      Previous
    </Button>

    <small className="progress">
      Question {currentQuestion} / {totalQuestions}
    </small>

    {showNext && (
      <Button
        onClick={event => {
          event.preventDefault();
          next();
        }}
      >
        Next
      </Button>
    )}
  </nav>
);
