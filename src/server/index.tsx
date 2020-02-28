import * as express from 'express';
import * as webpack from 'webpack';
import * as compression from 'compression';

import staticFiles from './middlewares/staticFiles';
import i18n from './middlewares/i18n';

const server = express();

const { NODE_ENV = 'production', PORT = 3000 } = process.env;

const isDevelopment = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'production';

if (isProduction) {
  server.use(compression());
}

server.use(i18n);
server.use(staticFiles);

if (isDevelopment) {
  const webpackClientConfig = require('../../webpack.config')({ platform: 'client' });
  const webpackServerConfig = require('../../webpack.config')({ platform: 'server' });
  const webpackConfig = [webpackClientConfig, webpackServerConfig];

  const compiler = webpack(webpackConfig);
  const clientCompiler = compiler.compilers.find((compiler) => compiler.name === 'client');

  server.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackClientConfig.output.publicPath,
      stats: 'errors-only',
    })
  );
  server.use(require('webpack-hot-middleware')(clientCompiler));
  server.use(
    require('webpack-hot-server-middleware')(compiler, {
      serverSideRender: true,
    })
  );
}

if (isProduction) {
  const serverRenderer = require('../../build/js/server.js').default;

  server.use(serverRenderer());
}

server.listen(PORT, () => console.log(`App listening on http://127.0.0.1:${PORT} [OK]`));
