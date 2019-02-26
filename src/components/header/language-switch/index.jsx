import Link from 'gatsby-link';
import React, { useState } from 'react';

import styles, { linkStyle } from './styles';

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
          {items
            .filter(language => language !== current)
            .map(language => (
              <li key={`language-${language}`}>
                <Link
                  to={language === 'en' ? '/' : `/${language}/`}
                  className={linkStyle.className}
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
