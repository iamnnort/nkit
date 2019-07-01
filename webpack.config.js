const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const typescript = require('./webpack/loaders/typescript');
const javascript = require('./webpack/loaders/javascript');
const css = require('./webpack/loaders/css');
const style = require('./webpack/loaders/style');
const image = require('./webpack/loaders/image');
const fonts = require('./webpack/loaders/fonts');
const env = require('./webpack/plugins/env');
const package = require('./package.json');

const { NODE_ENV = 'production' } = process.env;

const isDevelopment = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'production';

const config = function(environment) {
  let base = {
    mode: NODE_ENV,
    output: {
      path: path.resolve(process.cwd(), package.path.output),
      filename: 'js/[name].js',
      publicPath: '/',
    },
    devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'source-map',
    watch: isDevelopment,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [typescript(), javascript(), image(), fonts()],
    },
    plugins: [env()],
  };

  if (isProduction) {
    base = {
      ...base,
      optimization: {
        minimizer: [new TerserPlugin({ parallel: true })],
      },
    };
  }

  if (environment.platform === 'client') {
    base = {
      ...base,
      entry: {
        client: package.path.client,
      },
      module: {
        ...base.module,
        rules: [...base.module.rules, style()],
      },
    };
  }

  if (environment.platform === 'server') {
    base = {
      ...base,
      entry: {
        server: package.path.server,
      },
      target: 'node',
      externals: [nodeExternals({ whitelist: [/\.css$/i] })],
      plugins: [
        ...base.plugins,
        ...(isDevelopment
          ? [new WebpackShellPlugin({ onBuildEnd: ['yarn run:dev'] })]
          : [new CopyPlugin([{ from: 'public', to: '' }])]),
      ],
      module: {
        ...base.module,
        rules: [...base.module.rules, css()],
      },
    };
  }

  return base;
};

module.exports = config;
