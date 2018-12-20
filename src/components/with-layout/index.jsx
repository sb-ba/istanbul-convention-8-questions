import React from 'react';

import styles from './styles';

export default Wrapped => props => (
  <>
    <style jsx>{styles}</style>
    <Wrapped {...props} />
  </>
);
