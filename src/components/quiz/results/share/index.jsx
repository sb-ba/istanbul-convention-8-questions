import React from 'react';

import FacebookIcon from '../../../../../static/icons/facebook-square.svg';
import TwitterIcon from '../../../../../static/icons/twitter-square.svg';
import EnvelopeIcon from '../../../../../static/icons/envelope.svg';

import style, { shareIconStyle } from './style';

export default () => (
  <section>
    <style jsx>{style}</style>
    {shareIconStyle.styles}

    <h3 className="title">Share</h3>

    <a
      href="https://www.facebook.com/sharer/sharer.php?u="
      className="share-link"
    >
      <FacebookIcon className={shareIconStyle.className} />
    </a>

    <a href="https://twitter.com/intent/tweet" className="share-link">
      <TwitterIcon className={shareIconStyle.className} />
    </a>

    <a href="mailto:" className="share-link">
      <EnvelopeIcon className={shareIconStyle.className} />
    </a>
  </section>
);
