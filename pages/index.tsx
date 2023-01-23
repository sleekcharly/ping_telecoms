import CarouselContainer from '../components/Carousel';
import React from 'react';
import Layout from '../components/layouts/Layout';

export default function Home() {
  return (
    <div data-testid="home_page">
      <Layout>
        <CarouselContainer />
      </Layout>
    </div>
  );
}
