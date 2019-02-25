import React from 'react';

import translate from '../../lib/translate';

import Footer from '../footer';

import styles from './styles';

export default Wrapped => props => {
  const {
    pageContext: { translations }
  } = props;

  return (
    <div className="app">
      <style jsx>{styles}</style>

      <div className="app__constraint">
        <Wrapped {...props} />
        <Footer
          contact={translate('footerContact', translations)}
          privacy={translate('footerPrivacy', translations)}
          istanbulConvention={translate(
            'footerIstanbulConvention',
            translations
          )}
          councilOfEurope={translate('councilOfEurope', translations)}
          followUs={translate('footerFollowUs', translations)}
        />
      </div>
    </div>
  );
};
