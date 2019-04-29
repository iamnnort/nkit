const path = require('path');

module.exports = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader',
  options: {
    getCustomTransformers: path.resolve(__dirname, '../webpack.ts-transformers.js'),
  },
};
