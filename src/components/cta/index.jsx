import Link from 'gatsby-link';
import React from 'react';

import { linkStyles } from './styles';

export default ({ href, children }) => (
  <>
    {linkStyles.styles}

    <Link to={href} className={linkStyles.className}>
      {children}
    </Link>
  </>
);
