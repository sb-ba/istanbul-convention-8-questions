import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import stripHTML from '../../lib/strip-html';
import translate from '../../lib/translate';

import Footer from '../footer';

import styles from './styles';

export default Wrapped => props => {
  const { data, pageContext } = props;

  const { language } = pageContext;

  const translations =
    (data && data.translations && data.translations.edges) ||
    (pageContext && pageContext.translations && pageContext.translations);

  const title = stripHTML(translate('introTitle', translations));

  const metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { url }
    }
  } = metadata;

  return (
    <div className="app">
      <style jsx>{styles}</style>

      <Helmet>
        <title>{title}</title>

        {/* facebook OG */}
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content={`${url}${language ? `/${language}` : ''}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${url}/images-share/${language}/facebook.png`}
        />
        <meta property="og:image:width" content="1230" />
        <meta property="og:image:height" content="630" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coe" />
        <meta name="twitter:creator" content="@coe" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:image"
          content={`${url}/images-share/${language}/twitter.png`}
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
