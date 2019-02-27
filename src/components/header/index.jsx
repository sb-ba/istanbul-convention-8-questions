import classnames from 'classnames';
import Link from 'gatsby-link';
import React from 'react';

import COELogo from '../../../static/logos/coe.svg';
import LanguageSwitch from './language-switch';

import styles, { logoStyles, linkStyles } from './styles';

export default ({
  language,
  languages,
  title,
  titleIsCouncil = false,
  onClickLogo = () => {}
}) => (
  <header>
    <style jsx>{styles}</style>
    {linkStyles.styles}
    {logoStyles.styles}

    <Link to="/" onClick={onClickLogo} className={linkStyles.className}>
      <COELogo className={logoStyles.className} />
    </Link>

    {title && (
      <h1
        className={classnames(
          { title: !titleIsCouncil },
          { 'title-council': titleIsCouncil }
        )}
      >
        {title}
      </h1>
    )}

    <LanguageSwitch current={language} items={languages} />
  </header>
);
