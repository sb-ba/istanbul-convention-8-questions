import Link from 'gatsby-link';
import React from 'react';

import FacebookIcon from '../../../static/icons/facebook-square.svg';
import InstagramIcon from '../../../static/icons/instagram.svg';
import InternationalWomensDayLogo from '../../../static/logos/international-womens-day.svg';
import TwitterIcon from '../../../static/icons/twitter-square.svg';

import style, { shareIcon, iwdIcon, link } from './style';

export default ({ contact, privacy }) => (
  <footer>
    <style jsx>{style}</style>
    {shareIcon.styles}
    {iwdIcon.styles}
    {link.styles}
    <strong>Council of Europe</strong>
    <p>Human Rights Channel - Istanbul Convention</p>
    <div className="share">
      <strong className="share-title">Follow us on Social Media</strong>

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
    <InternationalWomensDayLogo className={iwdIcon.className} />
  </footer>
);
