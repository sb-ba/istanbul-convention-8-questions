import React from 'react';
import { Range } from 'rc-slider';

import { colors } from '../../../../tokens';
import './style.css';

const summarizeArray = arr =>
  arr.reduce((acc, current) => {
    // eslint-disable-next-line no-param-reassign
    acc += current;
    return acc;
  }, 0);

const updateResults = (data, callback) => {
  const differences = [...data, 99].reduce((acc, total) => {
    const sum = acc.length === 0 ? 0 : summarizeArray(acc);

    acc.push(total - sum);

    return acc;
  }, []);

  callback(differences);
};

export default ({ onChange = () => {}, ...rest }) => (
  <Range
    pushable
    trackStyle={[{ backgroundColor: colors.answer2 }]}
    railStyle={{ backgroundColor: colors.answer1 }}
    onChange={data => {
      updateResults(data, onChange);
    }}
    {...rest}
  />
);
