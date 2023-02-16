import Layout from '@/components/layouts/Layout';
import ServicesContainer from '@/components/ServicesContainer';
import React from 'react';
import { NextSeo } from 'next-seo';

type Props = { urlPath: string };

function services({ urlPath }: Props) {
  return (
    <div
      data-testid="home_page"
      className="overflow-hidden"
      style={{ fontFamily: 'Poppins' }}
    >
      <NextSeo
        title="Ping Telecoms | Services"
        canonical={`https://www.pingtelecoms.net${urlPath}`}
        description="Our core business areas are in the design, development, and management of the following services."
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
        <ServicesContainer />
      </Layout>
    </div>
  );
}

export default services;

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
