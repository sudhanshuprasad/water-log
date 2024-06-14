// next.config.js
module.exports = {
    async rewrites() {
        // console.log(`${process.env.SERVERURL}/api/:path*`)
        return [
            {
                source: '/device/:path*',
                destination: '/device/:path*',
            },
            {
                source: '/:path*',
                // destination: 'http://localhost:3333/api/:path*',
                destination: `${process.env.SERVERURL}/api/:path*`,
                // destination: 'https://water-log-production.up.railway.app/api/:path*',

            },
        ]
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
};
