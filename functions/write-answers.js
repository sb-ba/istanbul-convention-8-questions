const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
});

exports.handler = async (event, context, callback) => {
  if (!event.httpMethod === 'POST') {
    callback(new Error('Invalid request type'));
  }

  const { questionId, answers } = JSON.parse(event.body);

  mysql
    .query(
      `
    INSERT INTO answers (
      questionId,
      answers
    ) VALUES (
      '${questionId}',
      '${JSON.stringify(answers)}'
    );
  `
    )
    .then(data => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
      });
    })
    .catch(err => {
      return callback(err, {
        statusCode: 500
      });
    });
};
