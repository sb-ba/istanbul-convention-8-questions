import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import FacebookIcon from '../../../../../static/icons/facebook-square.svg';
import TwitterIcon from '../../../../../static/icons/twitter-square.svg';
import EnvelopeIcon from '../../../../../static/icons/envelope.svg';

import style, { shareIconStyle } from './style';

export default ({ share }) => {
  const {
    site: {
      siteMetadata: { url }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
        }
      }
    }
  `);

  const facebookURL = url;
  const twittertURL = url;

  return (
    <section>
      <style jsx>{style}</style>
      {shareIconStyle.styles}

      <h3 className="title">{share}</h3>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${facebookURL}`}
        className="share-link"
      >
        <FacebookIcon className={shareIconStyle.className} />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${twittertURL}`}
        className="share-link"
      >
        <TwitterIcon className={shareIconStyle.className} />
      </a>

      <a href="mailto:" className="share-link">
        <EnvelopeIcon className={shareIconStyle.className} />
      </a>
    </section>
  );
};
