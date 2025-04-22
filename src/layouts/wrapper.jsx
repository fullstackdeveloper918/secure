'use client';
import React from 'react';
import BackToTop from '@/components/back-to-top';
import ThemeSetting from '@/components/theme-setting';
if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min');
}

const Wrapper = ({ children, showBackToTop = true }) => {
  return (
    <React.Fragment>
      {children}
      {showBackToTop && <BackToTop />}
      <ThemeSetting />
    </React.Fragment>
  );
};

export default Wrapper;
