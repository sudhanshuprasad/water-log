// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://dull-erin-donkey-garb.cyclic.app/api/:path*',
            },
        ]
    },
};