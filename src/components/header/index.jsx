import Link from 'gatsby-link';
import React from 'react';

import LanguageSwitch from './language-switch';

import styles, { logoStyles, linkStyles } from './styles';

export default ({ language, languages, title }) => (
  <header>
    <style jsx>{styles}</style>
    {linkStyles.styles}
    {logoStyles.styles}

    <Link to="/" className={logoStyles.className}>
      Council
      <br /> of
      <br /> Europe
    </Link>

    <h1>{title}</h1>

    <LanguageSwitch current={language} items={languages} />
  </header>
);
