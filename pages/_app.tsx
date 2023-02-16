import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Ping Telecoms"
        description="Ping Telecommunications Resources Limited is an indigenous ICT company incorporated in Nigeria to provide cost effective and customer dependent services without compromising standards."
        canonical="https://www.pingtelecoms.net"
        openGraph={{
          url: 'https://www.pingtelecoms.net',
          title: 'Ping Telecoms',
          description:
            'Ping Telecommunications Resources Limited is an indigenous ICT company incorporated in Nigeria to provide cost effective and customer dependent services without compromising standards.',
          images: [{ url: '/images/logo.png' }],
          site_name: 'Ping Telecoms',
          type: 'website',
        }}
        twitter={{
          site: '@pingtelecoms',
          cardType: 'summary',
        }}
      />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
