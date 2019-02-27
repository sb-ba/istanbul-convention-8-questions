import Helmet from 'react-helmet';
import React, { Component } from 'react';

import translate from '../../lib/translate';

import Explainer from './explainer';
import Footer from './footer';
import Intro from './intro';
import Header from '../header';
import Progress from './progress';
import Results from './results';
import Question from './question';

import styles from './styles';

const stripHTML = str => str.replace(/<(?:.|\n)*?>/gm, '');

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
    userAnswers: {},
    answers: null,
    current: -2,
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
      current: -1
    }));
  };

  previous = () => {
    const { questions } = this.props;
    const { answers, current } = this.state;
    const { id: questionId } =
      current >= 0 && questions[current].node.frontmatter;

    this.setState(state => ({
      ...state,
      current: state.current - 1
    }));

    persistAnswers(questionId, answers);
  };

  next = () => {
    const { questions } = this.props;
    const { answers, current } = this.state;
    const { id: questionId } =
      current >= 0 && questions[current].node.frontmatter;

    this.setState(state => ({
      ...state,
      current: state.current + 1
    }));

    persistAnswers(questionId, answers);
  };

  render() {
    const {
      questions,
      language,
      languages,
      translations,
      explainer,
      explainerResults
    } = this.props;
    const { current, finish, userAnswers } = this.state;

    const hasPrevious = current > -1;
    const hasNext = !!questions[current + 1];
    const title = finish
      ? translate('resultsTitle', translations)
      : `${translate('questionsTitle', translations)} ${current + 1}/${
          questions.length
        }`;

    return (
      <main>
        <style jsx>{styles}</style>

        {current >= 0 ? (
          <Helmet title={title} />
        ) : (
          <Helmet title={stripHTML(translate('introTitle', translations))} />
        )}

        <Header
          items={[['/', 'Home']]}
          language={language}
          languages={languages}
          title={
            current >= 0 ? title : translate('councilOfEurope', translations)
          }
          titleIsCouncil={current < 0}
          onClickLogo={event => {
            event.preventDefault();

            // reset quiz
            this.setState({
              answers: null,
              current: -2,
              finish: false,
              userAnswers: {}
            });
          }}
        />

        {current >= 0 && (
          <Progress
            current={finish ? questions.length : current}
            total={questions.length}
          />
        )}

        {current === -2 && (
          <Intro
            introQuestion={translate('introQuestion', translations)}
            title={translate('introTitle', translations)}
            intro={translate('introIntro', translations)}
            buttonLabel={translate('introButtonLabel', translations)}
            onStart={event => {
              event.preventDefault();
              this.hideIntro();
            }}
          />
        )}

        {current === -1 && (
          <div className="question-container">
            <Explainer {...explainer[0].node} />
          </div>
        )}

        {!finish && current >= 0 && (
          <div className="question-container" key={`question-${current}`}>
            <Question
              currentQuestion={current + 1}
              storeAnswer={answers => {
                this.setState(state => ({
                  ...state,
                  answers,
                  userAnswers: {
                    ...state.userAnswers,
                    [questions[current].node.frontmatter.id]: answers
                  }
                }));
              }}
              {...questions[current].node}
            />
          </div>
        )}

        {finish && (
          <div className="question-container">
            <Results
              userAnswers={userAnswers}
              questions={questions}
              title={translate('resultsThankYou', translations)}
              action={translate('resultsAction', translations)}
              share={translate('resultsShare', translations)}
              compare={translate('resultsCompare', translations)}
              explainer={explainerResults[0]}
            />
          </div>
        )}

        {!finish && current >= -1 && (
          <Footer
            next={() => {
              if (hasNext) {
                this.next();
              } else {
                this.finish();
              }
            }}
            nextLabel={translate('next', translations)}
            showPrevious={hasPrevious && !finish}
            previous={() => this.previous()}
            previousLabel={translate('previous', translations)}
          />
        )}
      </main>
    );
  }
}
