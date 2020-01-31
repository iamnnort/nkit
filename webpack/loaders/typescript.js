const path = require('path');

module.exports = () => ({
  test: /\.tsx?$/,
  loader: 'ts-loader',
  options: {
    getCustomTransformers: path.resolve(__dirname, '../../webpack.ts-transformers.js'),
    // disable type checker - we will use it in fork plugin
    transpileOnly: true,
  },
});
