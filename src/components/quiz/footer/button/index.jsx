/* eslint-disable react/button-has-type */

import React from 'react';

import styles from './styles';

export default ({ children, type = 'button', ...rest }) => (
  <button type={type} {...rest}>
    <style jsx>{styles}</style>
    {children}
  </button>
);
