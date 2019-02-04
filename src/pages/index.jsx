import React from 'react';

import Cta from '../components/cta';
import Page from '../components/page';
import withLayout from '../components/with-layout';

export default withLayout(() => (
  <Page title="Homepage">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>

    <Cta href="/en">Start the quiz</Cta>
  </Page>
));
