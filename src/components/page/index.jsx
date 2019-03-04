import React from 'react';

import styles from './styles';

export default ({ children }) => (
  <article className="page">
    <style jsx>{styles}</style>
    {children}
  </article>
);
