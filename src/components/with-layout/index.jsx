import React from 'react';

import translate from '../../lib/translate';

import Footer from '../footer';

import styles from './styles';

export default Wrapped => props => {
  const {
    pageContext: { translations }
  } = props;

  return (
    <>
      <style jsx>{styles}</style>
      <Wrapped {...props} />
      <Footer
        contact={translate('footerContact', translations)}
        privacy={translate('footerPrivacy', translations)}
      />
    </>
  );
};
