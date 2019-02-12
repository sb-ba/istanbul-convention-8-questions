import React from 'react';

import Button from './button';

import styles from './styles';

export default ({ showPrevious, previous, next }) => (
  <nav>
    <style jsx>{styles}</style>

    <Button
      onClick={event => {
        event.preventDefault();
        previous();
      }}
      disabled={!showPrevious}
    >
      Previous
    </Button>

    <Button
      onClick={event => {
        event.preventDefault();
        next();
      }}
    >
      Next
    </Button>
  </nav>
);
