const mysql = require('serverless-mysql')({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
});

exports.handler = async () => {
  const query = `
    SELECT
      questionId,
      AVG(answer1) AS answer1,
      AVG(answer2) AS answer2,
      AVG(answer3) AS answer3
    FROM answers
    GROUP BY questionId;
  `;

  try {
    const data = await mysql.query(query);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Database was unable to read the results.'
    };
  }
};
