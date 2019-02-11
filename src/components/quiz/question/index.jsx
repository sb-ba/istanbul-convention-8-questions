/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';

import Answer from './answer';
import Slider from './slider';

import styles from './styles';

export default class Question extends React.Component {
  state = {
    answerResults: [33, 33, 33]
  };

  constructor(props) {
    super(props);

    const { storeAnswer } = this.props;
    const { answerResults } = this.state;

    storeAnswer(answerResults);
  }

  updateResultForAnswers = data => {
    this.setState(state => ({
      ...state,
      answerResults: data
    }));
  };

  render() {
    const {
      currentQuestion,
      frontmatter: { title, answers = [] },
      storeAnswer
    } = this.props;
    const { answerResults } = this.state;

    return (
      <div className="question">
        <style jsx>{styles}</style>

        <h1 className="title-container">
          <div className="current">{currentQuestion}</div>

          <div className="title">{title}</div>
        </h1>

        <div className="slider-container">
          <Slider
            onChange={data => {
              this.updateResultForAnswers(data);
              storeAnswer(data);
            }}
          />
        </div>

        {answers.map((answer, index) => (
          <Answer index={index} result={answerResults[index]}>
            {answer}
          </Answer>
        ))}
      </div>
    );
  }
}
