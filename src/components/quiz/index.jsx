import React, { Component } from 'react';

import Footer from './footer';
import Header from './header';
import Results from './results';
import Question from './question';

import styles from './styles';

export default class Quiz extends Component {
  state = {
    current: 0,
    finish: false
  };

  finish = () => {
    this.setState(state => ({
      ...state,
      finish: true
    }));
  };

  previous = () => {
    this.setState(state => ({
      ...state,
      current: state.current - 1
    }));
  };

  next = () => {
    this.setState(state => ({
      ...state,
      current: state.current + 1
    }));
  };

  render() {
    const { questions } = this.props;
    const { current, finish } = this.state;

    const hasNext = !!questions[current + 1];
    const hasPrevious = !!questions[current - 1];

    return (
      <main>
        <style jsx>{styles}</style>

        <Header items={[['/', 'Home']]} />

        {!finish ? (
          <div className="question-container">
            <Question {...questions[current].node} />
          </div>
        ) : (
          <div className="result-container">
            <Results />
          </div>
        )}

        <Footer
          showNext={!finish}
          next={() => {
            if (hasNext) {
              this.next();
            } else {
              this.finish();
            }
          }}
          showPrevious={hasPrevious && !finish}
          previous={() => this.previous()}
          currentQuestion={current + 1}
          totalQuestions={questions.length}
        />
      </main>
    );
  }
}
