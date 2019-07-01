module.exports = () => ({
  test: /\.(jpe?g|png|gif|ico)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8000,
        name: 'assets/images/[hash]-[name].[ext]',
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        disable: true,
      },
    },
  ],
});
