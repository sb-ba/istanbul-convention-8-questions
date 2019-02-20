import React from 'react';

import Button from './button';
import Spinner from './spinner';

import styles from './styles';

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

    <Button
      onClick={event => {
        event.preventDefault();
        previous();
      }}
      disabled={!showPrevious || isLoading === 'previous'}
    >
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
    </Button>
  </nav>
);
