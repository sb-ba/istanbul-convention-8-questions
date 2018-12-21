import fetch from 'node-fetch';

exports.handler = (event, context, callback) => {
  const { SHEET_URL, SHEET_API_KEY } = process.env;
  const RANGE = 'A1:A';

  fetch(`${SHEET_URL}/values/${RANGE}?key=${SHEET_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const { values } = data;
      const average = values.reduce((acc, current) => {
        // eslint-disable-next-line no-param-reassign
        acc += parseInt(current[0], 10);
        return acc;
      }, 0);

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ average })
      });
    });
};
