// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:3333/api/:path*',
            },
        ]
    },
};