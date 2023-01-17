import React from 'react';
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
    </div>
  );
}

export default Layout;
