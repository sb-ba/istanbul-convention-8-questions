import React from 'react';

import Button from './button';
import Spinner from './spinner';

import styles from './styles';

export default ({ showPrevious, previous, next, isLoading = false }) => (
  <nav>
    <style jsx>{styles}</style>

    <Button
      onClick={event => {
        event.preventDefault();
        previous();
      }}
      disabled={!showPrevious}
    >
      {isLoading === 'previous' ? <Spinner /> : <>Previous</>}
    </Button>

    <Button
      onClick={event => {
        event.preventDefault();
        next();
      }}
    >
      {isLoading === 'next' ? <Spinner /> : <>Next</>}
    </Button>
  </nav>
);
