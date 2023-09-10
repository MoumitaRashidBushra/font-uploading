const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/font-uploading', // Specify the path to proxy
        createProxyMiddleware({
            target: 'http://localhost:5173', // Specify the target URL of your PHP server
            changeOrigin: true,
        })
    );
};
