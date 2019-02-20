const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
});

exports.handler = async (event, context, callback) => {
  mysql
    .query(
      `
    SELECT
      questionId,
      AVG(answer1) AS answer1,
      AVG(answer2) AS answer2,
      AVG(answer3) AS answer3
    FROM answers
    GROUP BY questionId;
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
