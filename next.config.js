/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["127.0.0.1", "localhost"],
    },
};

module.exports = nextConfig;
