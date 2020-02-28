const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const typescript = require('./webpack/loaders/typescript');
const javascript = require('./webpack/loaders/javascript');
const css = require('./webpack/loaders/css');
const style = require('./webpack/loaders/style');
const svg = require('./webpack/loaders/svg');
const image = require('./webpack/loaders/image');
const fonts = require('./webpack/loaders/fonts');
const env = require('./webpack/plugins/env');
const pkg = require('./package.json');

const { NODE_ENV = 'production' } = process.env;

const isDevelopment = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'production';

const config = function(environment) {
  let base = {
    name: environment.platform,
    mode: NODE_ENV,
    context: process.cwd(),
    output: {
      path: path.resolve(process.cwd(), pkg.path.output),
    },
    devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'source-map',
    resolve: {
      alias: {
        '@test': path.resolve(process.cwd(), 'test/'),
        '@assets': path.resolve(process.cwd(), 'src/assets/'),
        '@client': path.resolve(process.cwd(), 'src/client/'),
        '@common': path.resolve(process.cwd(), 'src/common/'),
        '@server': path.resolve(process.cwd(), 'src/server/'),
        '@locales': path.resolve(process.cwd(), 'src/locales/'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [typescript(), javascript(), image(), fonts(), svg()],
    },
    plugins: [
      env(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };

  if (isProduction) {
    base = {
      ...base,
      optimization: {
        minimizer: [
          new TerserPlugin({
            parallel: true,
          }),
        ],
      },
    };
  }

  if (environment.platform === 'client') {
    base = {
      ...base,
      entry: pkg.path.client,
      output: {
        ...base.output,
        filename: 'js/client.js',
      },
      target: 'web',
      module: {
        ...base.module,
        rules: [...base.module.rules, style()],
      },
    };

    if (isDevelopment) {
      base = {
        ...base,
        entry: ['webpack-hot-middleware/client?reload=true&quiet=true', base.entry],
      };
    }
  }

  if (environment.platform === 'server') {
    base = {
      ...base,
      entry: pkg.path.server,
      output: {
        ...base.output,
        filename: 'js/server.js',
        libraryTarget: 'commonjs2',
      },
      target: 'node',
      externals: [
        nodeExternals({
          whitelist: [/\.css$/i],
        }),
      ],
      module: {
        ...base.module,
        rules: [...base.module.rules, css()],
      },
    };

    if (environment.build === true) {
      base = {
        ...base,
        plugins: [
          ...base.plugins,
          new CopyPlugin([
            {
              from: 'public',
              to: '',
            },
          ]),
        ],
      };
    }
  }

  return base;
};

module.exports = config;
