import Helmet from 'react-helmet';
import Modal from 'react-modal';
import React, { Component } from 'react';

import Footer from './footer';
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
    current: 0,
    finish: false,
    hideIntro: true
  };

  componentDidMount() {
    const hideIntro =
      window &&
      window.sessionStorage &&
      window.sessionStorage.getItem('intro-open') === 'false';

    this.setState(state => ({
      ...state,
      hideIntro
    }));
  }

  finish = () => {
    this.setState(state => ({
      ...state,
      finish: true
    }));
  };

  hideIntro = () => {
    if (window && window.sessionStorage) {
      window.sessionStorage.setItem('intro-open', false);
    }

    this.setState(state => ({
      ...state,
      hideIntro: true
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
    const { current, finish, hideIntro } = this.state;

    const hasNext = !!questions[current + 1];
    const hasPrevious = !!questions[current - 1];
    const title = finish
      ? 'Results'
      : `Question ${current + 1}/${questions.length}`;

    return (
      <main>
        <style jsx>{styles}</style>

        <Helmet title={title} />

        <Header
          items={[['/', 'Home']]}
          language={language}
          languages={languages}
          title={title}
          onClickLogo={event => {
            event.preventDefault();

            // reset quiz
            this.setState({
              answers: null,
              current: 0,
              finish: false,
              hideIntro: false
            });
          }}
        />

        <Progress
          current={finish ? questions.length : current}
          total={questions.length}
        />

        {current === 0 && (
          <Modal isOpen={!hideIntro}>
            <h1>8 Questions on 8 March</h1>
            <p>
              On International Women’s Day we want to know what you think is the
              best thing about the Istanbul Convention.
            </p>
            Give us your views and complete the survey See if other people agree
            with you
            <button
              type="button"
              onClick={event => {
                event.preventDefault();
                this.hideIntro();
              }}
            >
              Start Quiz
            </button>
          </Modal>
        )}

        {!finish ? (
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
        ) : (
          <div className="result-container">
            <Results questions={questions} />
          </div>
        )}

        {!finish && (
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
