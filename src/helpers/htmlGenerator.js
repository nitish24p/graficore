
import { StaticRouter } from 'react-router-dom';
import App from './../App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import stats from './../../dist/build/stats.json';



const cssSrc = stats.bundle[1];
const vendorJsSrc = stats.vendors;
const bundleJsSrc = stats.bundle[0];
const manifestJsSrc = stats.manifest;
const inlinedCss = fs.readFileSync(`./dist/build/${cssSrc}`);

/*
* Based on the env either a link or inline
*/
function renderCss() {
  if (process.env.NODE_ENV === 'production') {
    return `
      <style>
        ${inlinedCss.toString('utf8')}
      </style>
    `;
  } else {
    return `<link rel="stylesheet" type="text/css" href="/css/${cssSrc}">`;
  }
}

export function renderStaticMarkup(request: Object) {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={ request.url } context={ context }>
      <App />
    </StaticRouter>
  );


  return `
    <html lang="en-us">
      <head>
        <meta charset="utf-8">
        <title>Graficore</title>
        <meta name="description" content="Graficore | Create patterns with basics shapes and a Quadtree grid | Branding Patterns">
        <link rel="dns-prefetch" href="https://fonts.gstatic.com">
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <link rel="shortcut icon" href="/icons/favicon.ico"  />

        <meta property="og:description" content="Graficore | Create patterns with basics shapes and a Quadtree grid">
        <meta property="og:url" content="https://graficore.herokuapp.com/">
        <meta property="og:site_name" content="Graficore">
        <meta property="og:image" content="/assets/art_v2.png">
        <meta property="og:type" content="website">

          ${renderCss()}
        <link rel="preload" as="script" href="/js/${manifestJsSrc}">
        <link rel="preload" as="script" href="/js/${vendorJsSrc}">
        <link rel="preload" as="script" href="/js/${bundleJsSrc}">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script type="text/javascript" src="/js/${manifestJsSrc}"></script>
        <script type="text/javascript" src="/js/${vendorJsSrc}"></script>
        <script type="text/javascript" src="/js/${bundleJsSrc}"></script>
      </body>
    </html>
  `;
}