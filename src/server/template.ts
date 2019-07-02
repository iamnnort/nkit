import { HelmetData } from 'react-helmet';
import { appendUniversalPortals } from 'react-portal-universal/lib/server';
import { State } from '../common/store';

const template = ({
  body,
  styles,
  helmet,
  state,
}: {
  body: string;
  styles: string;
  helmet: HelmetData;
  state: State;
}) =>
  appendUniversalPortals(`
  <!doctype html>
  <html lang="en" ${helmet.htmlAttributes.toString()}>

  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all" />
    <meta name="author" content="Nikita Pavets" />
    <meta name="copyright" lang="en" content="react-ssr-ts-redux" />

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffc40d">
    <meta name="theme-color" content="#ffffff">

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="react-ssr-ts-redux.com" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@react-ssr-ts-redux" />
    <meta name="twitter:creator" content="@nikitapavets" />

    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${styles}
  </head>

  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${body}</div>
  </body>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
  </script>
  <script src="/js/client.js" defer></script>

  </html>
`);

export default template;
