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
}) => (
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

      <FacebookIcon className={shareIcon.className} />
      <TwitterIcon className={shareIcon.className} />
      <InstagramIcon className={shareIcon.className} />
    </div>
    <Link to="/contact/" className={link.className}>
      {contact}
    </Link>
    |
    <Link to="/privacy/" className={link.className}>
      {privacy}
    </Link>
    <COELogo className={coeLogo.className} />
    <InternationalWomensDayLogo className={iwdIcon.className} />
  </footer>
);
