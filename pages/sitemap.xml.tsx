import React from 'react';
import * as fs from 'fs';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: any) => {
  // set base url
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://www.pingtelecoms.net',
    test: 'http://localhost:3000',
  }[process.env.NODE_ENV];

  // set static pges
  const staticPages = fs
    .readdirSync(
      { development: 'pages', production: './', test: 'pages' }[
        process.env.NODE_ENV
      ],
    )
    .filter((staticPage) => {
      return ![
        '_app.tsx',
        '_document.tsx',
        'sitemap.xml.tsx',
        '.env.development',
        '.next',
        '___next_launcher.js',
        '___vc_bridge.js',
        'node_modules',
        '404.jsx',
        'api',
        'package.json',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const allPaths = [...staticPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
