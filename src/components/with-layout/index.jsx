import Helmet from 'react-helmet';
import React from 'react';

import stripHTML from '../../lib/strip-html';
import translate from '../../lib/translate';

import Footer from '../footer';

import styles from './styles';

export default Wrapped => props => {
  const {
    pageContext: { language, translations }
  } = props;

  const title = stripHTML(translate('introTitle', translations));

  return (
    <div className="app">
      <style jsx>{styles}</style>

      <Helmet>
        <title>{title}</title>

        <meta name="og:title" content={title} />
        <meta
          name="og:image"
          content={`/images/share/${language}/facebook.png`}
        />
      </Helmet>

      <div className="app__constraint">
        <Wrapped {...props} />
        <Footer
          contact={translate('footerContact', translations)}
          privacy={translate('footerPrivacy', translations)}
          istanbulConvention={translate(
            'footerIstanbulConvention',
            translations
          )}
          councilOfEurope={translate('councilOfEurope', translations)}
          followUs={translate('footerFollowUs', translations)}
        />
      </div>
    </div>
  );
};
