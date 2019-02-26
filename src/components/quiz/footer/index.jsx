import React from 'react';

import ChevronLeftIcon from '../../../../static/icons/chevron-left.svg';
import ChevronRightIcon from '../../../../static/icons/chevron-right.svg';
import Button from './button';

import styles, { iconStyles, iconStylesPrevious } from './styles';

export default ({ showPrevious, previous, next, nextLabel, previousLabel }) => (
  <nav>
    <style jsx>{styles}</style>
    {iconStyles.styles}
    {iconStylesPrevious.styles}

    <Button
      onClick={event => {
        event.preventDefault();
        previous();
      }}
      disabled={!showPrevious}
    >
      <ChevronLeftIcon
        className={`${iconStyles.className} ${iconStylesPrevious.className}`}
      />
      <span className="label label--previous">{previousLabel}</span>
    </Button>

    <Button
      onClick={event => {
        event.preventDefault();
        next();
      }}
    >
      <span className="label label--next">{nextLabel}</span>
      <ChevronRightIcon className={iconStyles.className} />
    </Button>
  </nav>
);
