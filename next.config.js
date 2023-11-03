/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["127.0.0.1", "localhost", "31.129.108.132"],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig;
