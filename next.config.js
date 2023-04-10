/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: process.env.PROTOCOL,
                hostname: process.env.IMAGE_URL,
                pathname: '/media/**'
            }
        ]
    },
    env: {
        URL: process.env.URL
    }
};

module.exports = nextConfig;
