import React from 'react';

import styles from './styles';

export default ({ title, children }) => (
  <main>
    <style jsx>{styles}</style>
    <h1>{title}</h1>
    {children}
  </main>
);
