import React from 'react';

import styles from './styles';

export default ({ items }) => (
  <header>
    <style jsx>{styles}</style>

    {items.map(([url, label]) => (
      <a href={url} className="nav-link">
        {label}
      </a>
    ))}
  </header>
);
