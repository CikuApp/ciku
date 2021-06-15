/* eslint-disable react/prop-types */
import React from 'react';
import ScrollToTop from 'components/common/ScrollToTop';

// Parent container for each page
const PageContainer = ({ children }) => (
  <ScrollToTop>
    <div className="w-full flex flex-col items-center">{children}</div>
  </ScrollToTop>
);

export default PageContainer;
