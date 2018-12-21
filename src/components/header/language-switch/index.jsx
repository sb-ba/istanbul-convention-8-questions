import React from 'react';

import styles from './styles';

export default ({ items }) => (
  <ul>
    <style jsx>{styles}</style>

    {items.map(language => (
      <li>
        <a href={`/${language}/`}>{language}</a>
      </li>
    ))}
  </ul>
);
