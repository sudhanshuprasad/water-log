/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        },
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3333/api/:path*', // Your API server's address
            },
        ];
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "http://localhost:3333/api/:path*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
                port: "",
                pathname: "/random",
            },
        ],
    },
};

module.exports = nextConfig;
