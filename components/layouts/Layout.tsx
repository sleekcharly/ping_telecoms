import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <div data-testid="layout">
      {/* Header component */}
      <Header />
      {/* entire page content */}
      {children}
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Layout;
