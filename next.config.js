/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

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
    },
    i18n
};

module.exports = nextConfig;
