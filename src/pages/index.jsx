import React from 'react';

import Page from '../components/page';
import withLayout from '../components/with-layout';

export default withLayout(() => (
  <Page title="Homepage">
    <a href="/en">Quiz EN</a>
    <a href="/fr">Quiz FR</a>
  </Page>
));
