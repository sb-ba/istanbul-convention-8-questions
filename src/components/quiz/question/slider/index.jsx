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

const differences = data =>
  [...data, 99].reduce((acc, total) => {
    const sum = acc.length === 0 ? 0 : summarizeArray(acc);

    acc.push(total - sum);

    return acc;
  }, []);

export default class Slider extends React.Component {
  state = {
    lastTrackValue: 33
  };

  render() {
    const { onChange = () => {}, ...rest } = this.props;
    const { lastTrackValue } = this.state;

    return (
      <div className="slider-container">
        <style jsx>{style}</style>

        <Range
          pushable
          trackStyle={[{ backgroundColor: colors.answer2 }]}
          railStyle={{ backgroundColor: colors.answer1 }}
          onChange={data => {
            const diff = differences(data);

            this.setState(state => ({
              ...state,
              lastTrackValue: diff[diff.length - 1]
            }));

            onChange(diff);
          }}
          {...rest}
        />

        <div
          className="slider-last-track"
          style={{ width: `${lastTrackValue + 0.5}%` }}
        />
      </div>
    );
  }
}
