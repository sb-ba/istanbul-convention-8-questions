import fetch from 'node-fetch';

exports.handler = (event, context, callback) => {
  const { SHEET_URL, SHEET_API_KEY } = process.env;
  const RANGE = 'A1';

  fetch(`${SHEET_URL}/values/${RANGE}?key=${SHEET_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
      });
    });
};
