import Helmet from 'react-helmet';
import React, { Component } from 'react';

import Footer from './footer';
import Intro from './intro';
import Header from '../header';
import Progress from './progress';
import Results from './results';
import Question from './question';

import styles from './styles';

const persistAnswers = (questionId, data) => {
  const payload = {
    questionId,
    answers: data
  };

  return fetch('/.netlify/functions/write-answers', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
};

export default class Quiz extends Component {
  state = {
    answers: null,
    current: -1,
    finish: false
  };

  finish = () => {
    this.setState(state => ({
      ...state,
      finish: true
    }));
  };

  hideIntro = () => {
    this.setState(state => ({
      ...state,
      current: 0
    }));
  };

  previous = () => {
    this.setState(state => ({
      ...state,
      current: state.current - 1
    }));
  };

  next = () => {
    const { questions } = this.props;
    const { answers, current } = this.state;
    const { id: questionId } = questions[current].node.frontmatter;

    persistAnswers(questionId, answers).then(() => {
      this.setState(state => ({
        ...state,
        current: state.current + 1
      }));
    });
  };

  render() {
    const { questions, language, languages } = this.props;
    const { current, finish } = this.state;

    const hasNext = !!questions[current + 1];
    const hasPrevious = !!questions[current - 1];
    const title = finish
      ? 'Results'
      : `Question ${current + 1}/${questions.length}`;

    return (
      <main>
        <style jsx>{styles}</style>

        {current >= 0 ? (
          <Helmet title={title} />
        ) : (
          <Helmet title="8 Questions for the 8th of March" />
        )}

        <Header
          items={[['/', 'Home']]}
          language={language}
          languages={languages}
          title={current >= 0 && title}
          onClickLogo={event => {
            event.preventDefault();

            // reset quiz
            this.setState({
              answers: null,
              current: -1,
              finish: false
            });
          }}
        />

        {current >= 0 && (
          <Progress
            current={finish ? questions.length : current}
            total={questions.length}
          />
        )}

        {current === -1 && (
          <Intro
            onStart={event => {
              event.preventDefault();
              this.hideIntro();
            }}
          />
        )}

        {!finish && current >= 0 && (
          <div className="question-container" key={`question-${current}`}>
            <Question
              currentQuestion={current + 1}
              storeAnswer={answers => {
                this.setState(state => ({
                  ...state,
                  answers
                }));
              }}
              {...questions[current].node}
            />
          </div>
        )}

        {finish && (
          <div className="result-container">
            <Results questions={questions} />
          </div>
        )}

        {!finish && current >= 0 && (
          <Footer
            next={() => {
              if (hasNext) {
                this.next();
              } else {
                this.finish();
              }
            }}
            showPrevious={hasPrevious && !finish}
            previous={() => this.previous()}
          />
        )}
      </main>
    );
  }
}
