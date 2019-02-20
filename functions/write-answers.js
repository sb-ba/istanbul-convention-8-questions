const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
});

exports.handler = async (event, context) => {
  const { questionId, answers } = JSON.parse(event.body);
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
    context.fail(err);

    return {
      statusCode: 500,
      body: ''
    };
  }
};
