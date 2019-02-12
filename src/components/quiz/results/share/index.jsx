import React from 'react';

import FacebookIcon from '../../../../../static/icons/facebook-square.svg';
import TwitterIcon from '../../../../../static/icons/twitter-square.svg';
import EnvelopeIcon from '../../../../../static/icons/envelope-square.svg';

import style, { shareIconStyle } from './style';

export default () => (
  <section>
    <style jsx>{style}</style>
    {shareIconStyle.styles}

    <h3 className="title">Share the quiz</h3>

    <FacebookIcon className={shareIconStyle.className} />
    <TwitterIcon className={shareIconStyle.className} />
    <EnvelopeIcon className={shareIconStyle.className} />
  </section>
);
