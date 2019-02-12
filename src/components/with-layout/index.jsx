import React from 'react';

import Footer from '../footer';

import styles from './styles';

export default Wrapped => props => (
  <>
    <style jsx>{styles}</style>
    <Wrapped {...props} />
    <Footer />
  </>
);
