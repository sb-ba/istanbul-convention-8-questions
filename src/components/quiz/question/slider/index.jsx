import classnames from 'classnames';
import React from 'react';
import { Range } from 'rc-slider';

import { colors } from '../../../../tokens';

import HandIcon from '../../../../../static/icons/hand-paper.svg';

import style, { handIcon } from './style';
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
    firstTrackValue: 33,
    lastTrackValue: 33
  };

  render() {
    const {
      onChange = () => {},
      trackStyle,
      railStyle,
      disabled,
      hasAnimation = false,
      value,
      handPosition = 33,
      ...rest
    } = this.props;
    const { lastTrackValue } = this.state;

    return (
      <div
        className={classnames('slider-container', {
          'has-animation': hasAnimation
        })}
      >
        <style jsx>{style}</style>
        {handIcon.styles}

        <Range
          pushable
          trackStyle={trackStyle || [{ backgroundColor: colors.answer2 }]}
          railStyle={railStyle || { backgroundColor: colors.answer1 }}
          onChange={data => {
            const diff = differences(data);

            this.setState(state => ({
              ...state,
              firstTrackValue: diff[0],
              lastTrackValue: diff[diff.length - 1]
            }));

            onChange(diff);
          }}
          disabled={disabled}
          {...(value ? { value } : {})}
          {...rest}
        />

        {hasAnimation && handPosition && (
          <span className="hand-icon" style={{ left: `${handPosition}%` }}>
            <HandIcon className={handIcon.className} />
          </span>
        )}

        {!disabled && (
          <div
            className="slider-last-track"
            style={{ width: `${lastTrackValue + 0.5}%` }}
          />
        )}
      </div>
    );
  }
}
