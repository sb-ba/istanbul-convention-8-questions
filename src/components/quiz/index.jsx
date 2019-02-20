import Helmet from 'react-helmet';
import React, { Component } from 'react';

import Explainer from './explainer';
import Footer from './footer';
import Intro from './intro';
import Header from '../header';
import Progress from './progress';
import Results from './results';
import Question from './question';

import styles from './styles';

const translate = (key, translations) => {
  const {
    node: { frontmatter }
  } = translations.find(
    ({ node: { frontmatter: nodeFrontmatter } }) => !!nodeFrontmatter[key]
  );

  return frontmatter[key];
};

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
    current: -2,
    finish: false,
    isLoading: false
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
    const { id: questionId } = questions[current].node.frontmatter;

    this.setState(state => ({
      ...state,
      isLoading: 'previous'
    }));

    persistAnswers(questionId, answers).then(() => {
      this.setState(state => ({
        ...state,
        current: state.current - 1,
        isLoading: false
      }));
    });
  };

  next = () => {
    const { questions } = this.props;
    const { answers, current } = this.state;
    const { id: questionId } =
      current >= 0 && questions[current].node.frontmatter;

    if (!questionId) {
      this.setState(state => ({
        ...state,
        current: state.current + 1
      }));

      return Promise.resolve();
    }

    this.setState(state => ({
      ...state,
      isLoading: 'next'
    }));

    return persistAnswers(questionId, answers).then(() => {
      this.setState(state => ({
        ...state,
        current: state.current + 1,
        isLoading: false
      }));
    });
  };

  render() {
    const {
      questions,
      language,
      languages,
      translations,
      explainer
    } = this.props;
    const { current, finish, isLoading } = this.state;

    const hasNext = !!questions[current + 1];
    const hasPrevious = !!questions[current - 1];
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
          <Helmet title={translate('introTitle', translations)} />
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

        {current === -2 && (
          <Intro
            title={translate('introTitle', translations)}
            intro={translate('introIntro', translations)}
            buttonLabel={translate('introButtonLabel', translations)}
            onStart={event => {
              event.preventDefault();
              this.hideIntro();
            }}
          />
        )}

        {current === -1 && <Explainer {...explainer[0].node} />}

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
            isLoading={isLoading}
          />
        )}
      </main>
    );
  }
}
