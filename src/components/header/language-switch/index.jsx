import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyle } from './styles';

export default ({ items }) => (
  <ul>
    <style jsx>{styles}</style>
    {linkStyle.styles}

    {items.map(language => (
      <li key={`language-${language}`}>
        <Link
          to={language === 'en' ? '/' : `/${language}/`}
          className={linkStyle.className}
        >
          {language}
        </Link>
      </li>
    ))}
  </ul>
);
