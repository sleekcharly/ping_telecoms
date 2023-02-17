import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }: AppProps) {
  // track page views
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />
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
