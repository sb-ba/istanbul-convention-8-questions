import React from 'react';
import { Range } from 'rc-slider';

import { colors } from '../../../../tokens';
import style from './style';
import './style.css';

const summarizeArray = arr =>
  arr.reduce((acc, current) => {
    // eslint-disable-next-line no-param-reassign
    acc += current;
    return acc;
  }, 0);

export default class Slider extends React.Component {
  state = {
    results: [33, 33, 33]
  };

  updateResults = data => {
    const differences = [...data, 99].reduce((acc, total) => {
      const sum = acc.length === 0 ? 0 : summarizeArray(acc);

      acc.push(total - sum);

      return acc;
    }, []);

    this.setState(state => ({
      ...state,
      results: differences
    }));
  };

  render() {
    const { onChange = () => {}, ...rest } = this.props;
    const { results } = this.state;

    return (
      <>
        <Range
          count={100}
          defaultValue={[33, 66]}
          pushable
          trackStyle={[
            { backgroundColor: colors.answer2 },
            { backgroundColor: colors.answer3 }
          ]}
          railStyle={{ backgroundColor: colors.answer1 }}
          onChange={data => {
            this.updateResults(data);

            if (onChange) {
              onChange(results);
            }
          }}
          {...rest}
        />

        <div className="numbered-results">
          <style jsx>{style}</style>

          {results.map((value, index) => (
            <div style={{ flexBasis: `${results[index]}%` }} className="result">
              {value}%
            </div>
          ))}
        </div>
      </>
    );
  }
}
