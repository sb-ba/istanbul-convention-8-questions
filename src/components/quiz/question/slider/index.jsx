import React from 'react';
import { Range } from 'rc-slider';

import { colors } from '../../../../tokens';
import './style.css';

export default () => (
  <Range
    count={100}
    defaultValue={[33, 66]}
    pushable
    trackStyle={[
      { backgroundColor: colors.answer2 },
      { backgroundColor: colors.answer3 }
    ]}
    railStyle={{ backgroundColor: colors.answer1 }}
  />
);
