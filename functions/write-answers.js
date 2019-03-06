const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
});

exports.handler = async event => {
  const { questionId, answers, s } = JSON.parse(event.body);

  if (!answers) {
    return {
      statusCode: 422,
      body: 'No answers provided.'
    };
  }

  // ensure the sum of all answers is always 99%
  const answersSum = answers.reduce((sum, current) => {
    // eslint-disable-next-line no-param-reassign
    sum += parseInt(current, 10);
    return sum;
  }, 0);

  if (!s || s !== 'ic-8m' || answersSum !== 99) {
    return {
      statusCode: 422,
      body: 'Wrong secret or sum.'
    };
  }

  const query = `
    INSERT INTO answers (
      questionId,
      answer1,
      answer2,
      answer3
    ) VALUES (
      '${questionId}',
      ${answers[0]},
      ${answers[1]},
      ${answers[2]}
    );
  `;

  try {
    await mysql.query(query);

    return {
      statusCode: 204,
      body: ''
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Database was unable to save the results.'
    };
  }
};
