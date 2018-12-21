import fetch from 'node-fetch';

exports.handler = (event, context, callback) => {
  const { SHEET_URL, SHEET_API_KEY } = process.env;
  const RANGE = 'A:C';

  fetch(`${SHEET_URL}/values/${RANGE}?key=${SHEET_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const { values } = data;
      const averages = values.reduce((acc, current) => {
        current.forEach((column, index) => {
          if (!acc[index]) {
            acc[index] = {
              count: 0,
              total: 0
            };
          }

          acc[index].count += 1;
          acc[index].total += parseInt(column, 10);
        });

        return acc;
      }, {});

      Object.keys(averages).forEach(index => {
        averages[index].average = averages[index].total / averages[index].count;
        delete averages[index].total;
      });

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ averages })
      });
    });
};
