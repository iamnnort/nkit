const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV = 'production' } = process.env;

const isDevelopment = NODE_ENV === 'development';

module.exports = function(env, argv) {
  const base = {
    mode: NODE_ENV,
    output: {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    watch: isDevelopment,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          options: {
            getCustomTransformers: path.resolve(__dirname, 'webpack.ts-transformers.js'),
          },
        },
      ],
    },
  };

  if (env.platform === 'server') {
    base.target = 'node';
    base.entry = './src/server/index.tsx';
    base.output.filename = 'js/server.js';
    // plugins: [
    //   new WebpackShellPlugin({
    //     onBuildEnd: NODE_ENV === 'development' ? ['yarn run:dev'] : [],
    //   }),
    // ],
  }

  if (env.platform === 'client') {
    (base.entry = './src/client/index.tsx'), (base.output.filename = 'js/client.js');
  }

  return base;
};
