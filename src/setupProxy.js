const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/games',
    createProxyMiddleware({
      target: 'https://api-v3.igdb.com',
      changeOrigin: true,
    })
  );
};