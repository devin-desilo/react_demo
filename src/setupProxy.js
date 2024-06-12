const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        '/v2',
        createProxyMiddleware({
            target: 'https://api.linkedin.com',
            changeOrigin: true,
        })
    );
}; 