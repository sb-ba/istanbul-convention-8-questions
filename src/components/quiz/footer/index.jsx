import React from 'react';

import ChevronLeftIcon from '../../../../static/icons/chevron-left.svg';
import ChevronRightIcon from '../../../../static/icons/chevron-right.svg';
import Button from './button';
import Spinner from './spinner';

import styles, { iconStyles, iconStylesPrevious } from './styles';

export default ({
  showPrevious,
  previous,
  next,
  nextLabel,
  previousLabel,
  isLoading = false
}) => (
  <nav>
    <style jsx>{styles}</style>
    {iconStyles.styles}
    {iconStylesPrevious.styles}

    <Button
      onClick={event => {
        event.preventDefault();
        previous();
      }}
      disabled={!showPrevious || isLoading === 'previous'}
    >
      <ChevronLeftIcon
        className={`${iconStyles.className} ${iconStylesPrevious.className}`}
      />
      {isLoading === 'previous' ? <Spinner /> : <>{previousLabel}</>}
    </Button>

    <Button
      onClick={event => {
        event.preventDefault();
        next();
      }}
      disabled={isLoading === 'next'}
    >
      {isLoading === 'next' ? <Spinner /> : <>{nextLabel}</>}
      <ChevronRightIcon className={iconStyles.className} />
    </Button>
  </nav>
);
