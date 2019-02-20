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

  mysql
    .query(query)
    .then(data => {
      console.log('query done', data);

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
