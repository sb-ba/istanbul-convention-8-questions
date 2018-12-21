import React from 'react';

import Quiz from '../../components/quiz';
import withLayout from '../../components/with-layout';

export default withLayout(({ pageContext }) => <Quiz {...pageContext} />);
