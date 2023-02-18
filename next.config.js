const { i18n } = require("./i18n.config");
const { serverDependenciesToBundle } = require("./remix.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  serverDependenciesToBundle,
};

module.exports = nextConfig;
