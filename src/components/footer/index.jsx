import { useStaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import COELogo from '../../../static/logos/coe.svg';
import FacebookIcon from '../../../static/icons/facebook-square.svg';
import InstagramIcon from '../../../static/icons/instagram.svg';
import InternationalWomensDayLogo from '../../../static/logos/international-womens-day.svg';
import TwitterIcon from '../../../static/icons/twitter-square.svg';

import style, { shareIcon, iwdIcon, link, coeLogo } from './style';

export default ({
  contact,
  privacy,
  followUs,
  councilOfEurope,
  istanbulConvention
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          facebookLink
          twitterLink
          instagramLink
          contactLink
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { facebookLink, twitterLink, instagramLink, contactLink }
    }
  } = data;

  return (
    <footer>
      <style jsx>{style}</style>
      {shareIcon.styles}
      {iwdIcon.styles}
      {link.styles}
      {coeLogo.styles}
      <strong>{councilOfEurope}</strong>
      <p>{istanbulConvention}</p>
      <div className="share">
        <strong className="share-title">{followUs}</strong>

        <a href={facebookLink}>
          <FacebookIcon className={shareIcon.className} />
        </a>

        <a href={twitterLink}>
          <TwitterIcon className={shareIcon.className} />
        </a>

        <a href={instagramLink}>
          <InstagramIcon className={shareIcon.className} />
        </a>
      </div>
      <a href={contactLink} className={link.className}>
        {contact}
      </a>
      |
      <Link to="/privacy/" className={link.className}>
        {privacy}
      </Link>
      <COELogo className={coeLogo.className} />
      <InternationalWomensDayLogo className={iwdIcon.className} />
    </footer>
  );
};
