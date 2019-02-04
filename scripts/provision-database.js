const client = require('serverless-mysql')({
  config: {
    host: process.env.DATABASE_ENDPOINT,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
});

client.query(`
  CREATE TABLE IF NOT EXISTS answers (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    questionId INT NOT NULL,
    answers JSON NOT NULL,
    PRIMARY KEY(\`id\`)
  );
`);
