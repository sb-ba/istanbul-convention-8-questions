import classnames from 'classnames';
import Link from 'gatsby-link';
import React, { useState } from 'react';

import styles, { linkStyle, linkActiveStyle } from './styles';

const HUMAN_READABLE_LANGUAGES = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
  ru: 'Русский'
};

export default ({ current, items }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className="language-switch">
      <style jsx>{styles}</style>
      {linkStyle.styles}
      {linkActiveStyle.styles}

      <button
        type="button"
        onClick={event => {
          event.preventDefault();
          toggleOpen(!isOpen);
        }}
      >
        {current}
      </button>

      {isOpen && (
        <ul>
          {items.map(language => (
            <li key={`language-${language}`}>
              <Link
                to={language === 'en' ? '/' : `/${language}/`}
                className={classnames(linkStyle.className, {
                  [linkActiveStyle.className]: language === current
                })}
              >
                {HUMAN_READABLE_LANGUAGES[language] || language}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
