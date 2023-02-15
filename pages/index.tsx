import CarouselContainer from '../components/Carousel';
import React from 'react';
import Layout from '../components/layouts/Layout';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import MissionVission from '@/components/MissionVIssion';
import RecentProjects from '@/components/RecentProjects';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div
      data-testid="home_page"
      className="overflow-hidden"
      style={{ fontFamily: 'Poppins' }}
    >
      <Layout home={true}>
        <CarouselContainer />
        <ServicesSection />
        <AboutSection />
        <MissionVission />
        <RecentProjects />
        <ClientsSection />
        <ContactSection />
      </Layout>
    </div>
  );
}
