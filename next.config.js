const { i18n } = require('./i18n.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ['https://static-zmp3.zmdcdn.me/skins/zmp3-v5.2'],
  },
};

module.exports = nextConfig;
