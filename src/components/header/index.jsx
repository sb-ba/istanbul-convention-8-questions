import Link from 'gatsby-link';
import React from 'react';

import LanguageSwitch from './language-switch';

import styles, { linkStyles } from './styles';

export default ({ items, languages }) => (
  <header>
    <style jsx>{styles}</style>
    {linkStyles.styles}

    {items.map(([url, label]) => (
      <Link to={url} className={linkStyles.className}>
        {label}
      </Link>
    ))}

    <LanguageSwitch items={languages} />
  </header>
);
