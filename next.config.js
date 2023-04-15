/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                port: process.env.PORT,
                hostname: process.env.IMAGE_URL,
                pathname: '/media/**'
            }
        ]
    },
    env: {
        URL: process.env.URL,
        IMAGE_URL: process.env.IMAGE_URL,
        PORT: process.env.PORT
    },
    i18n
};

module.exports = nextConfig;
