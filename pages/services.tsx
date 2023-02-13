import Layout from '@/components/layouts/Layout';
import ServicesContainer from '@/components/ServicesContainer';
import React from 'react';

type Props = {};

function services({}: Props) {
  return (
    <div
      data-testid="home_page"
      className="overflow-hidden"
      style={{ fontFamily: 'Poppins' }}
    >
      <Layout>
        <ServicesContainer />
      </Layout>
    </div>
  );
}

export default services;
