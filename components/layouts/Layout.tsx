import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  home?: boolean;
  children: any;
};

function Layout({ home, children }: Props) {
  return (
    <div data-testid="layout">
      {/* Header component */}
      <Header home={home && true} />
      {/* entire page content */}
      {children}
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Layout;
