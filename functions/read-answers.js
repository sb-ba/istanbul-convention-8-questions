const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
});

exports.handler = async (event, context, callback) => {
  const groupByQuestion = results =>
    results.reduce((acc, current) => {
      const { questionId, answers } = current;
      const parsedAnswers = JSON.parse(answers);

      if (!acc[questionId]) {
        acc[questionId] = {
          answers: []
        };
      }

      acc[questionId].answers.push(parsedAnswers);

      return acc;
    }, {});

  const createAverages = grouped =>
    Object.keys(grouped).reduce((acc, questionId) => {
      const { answers } = grouped[questionId];

      if (!acc[questionId]) {
        acc[questionId] = {
          answers: {}
        };
      }

      // sum up all values
      answers.forEach(answer => {
        Object.keys(answer).forEach(answerId => {
          const answerValue = parseInt(answer[answerId], 10);

          // set default value for a single answer
          if (!acc[questionId].answers[answerId]) {
            acc[questionId].answers[answerId] = 0;
          }

          acc[questionId].answers[answerId] += answerValue;
        });
      });

      // calculate the averages
      acc[questionId].answers = Object.keys(acc[questionId].answers).reduce(
        (averages, answerId) => {
          // eslint-disable-next-line no-param-reassign
          averages[answerId] =
            Math.round(
              (acc[questionId].answers[answerId] / answers.length) * 100
            ) / 100;

          return averages;
        },
        {}
      );

      return acc;
    }, {});

  mysql
    .query(
      `
    SELECT
      questionId,
      answers
    FROM answers;
  `
    )
    .then(results => groupByQuestion(results))
    .then(grouped => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(createAverages(grouped))
      });
    })
    .catch(err => {
      return callback(err, {
        statusCode: 500
      });
    });
};
