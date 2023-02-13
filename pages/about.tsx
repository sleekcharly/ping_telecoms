import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layouts/Layout';
import AboutHeader from '@/components/AboutHeader';
import MissionVisionValues from '@/components/MissionVisionValues';
import AboutNote from '@/components/AboutNote';
import WhyNote from '@/components/WhyNote';

type Props = {};

function about({}: Props) {
  return (
    <div
      data-testid="home_page"
      className="overflow-hidden"
      style={{ fontFamily: 'Poppins' }}
    >
      <Layout>
        <AboutHeader />
        <MissionVisionValues />
        <AboutNote />
        <WhyNote />
      </Layout>
    </div>
  );
}

export default about;
