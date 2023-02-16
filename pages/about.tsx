import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layouts/Layout';
import AboutHeader from '@/components/AboutHeader';
import MissionVisionValues from '@/components/MissionVisionValues';
import AboutNote from '@/components/AboutNote';
import WhyNote from '@/components/WhyNote';

type Props = {
  urlPath: string;
};

function About({ urlPath }: Props) {
  return (
    <div
      data-testid="home_page"
      className="overflow-hidden"
      style={{ fontFamily: 'Poppins' }}
    >
      <NextSeo
        title="Ping Telecoms | About Us"
        canonical={`https://www.pingtelecoms.net${urlPath}`}
        description="Ping Telecommunications Resources Limited is an indigenous ICT company incorporated in Nigeria to provide cost effective and customer dependent services without compromising standards."
        openGraph={{
          url: `https://www.pingtelecoms.net${urlPath}`,
          title: 'Ping Telecoms | About Us',
          description:
            'Ping Telecommunications Resources Limited is an indigenous ICT company incorporated in Nigeria to provide cost effective and customer dependent services without compromising standards.',
          site_name: 'Ping Telecoms',
          type: 'website',
        }}
        twitter={{
          site: '@pingtelecoms',
          cardType: 'summary',
        }}
      />
      <Layout>
        <AboutHeader />
        <MissionVisionValues />
        <AboutNote />
        <WhyNote />
      </Layout>
    </div>
  );
}

export default About;

// get server side props with SSR
export async function getServerSideProps(context: any) {
  // get page url
  const urlPath = context.resolvedUrl;
  return {
    props: {
      urlPath: urlPath,
    },
  };
}
