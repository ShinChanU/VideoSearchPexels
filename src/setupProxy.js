const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/search', {
      target: 'https://api.pexels.com/videos',
      changeOrigin: true,
    }),
  );
};
