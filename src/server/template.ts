import { HelmetData } from 'react-helmet';

const template = ({
  body,
  styles,
  helmet,
  state,
}: {
  body: string;
  styles: string;
  helmet: HelmetData;
  state: any;
}) => `
  <!doctype html>
  <html ${helmet.htmlAttributes.toString()}>

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
`;

export default template;
