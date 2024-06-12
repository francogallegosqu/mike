const withTM = require('next-transpile-modules')([
  'react-slick',
  'slick-carousel',
  '@pancakeswap/token-lists',
  '@pancakeswap/smart-router',
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: [
      'raw.githubusercontent.com',
      'localhost:3000',
      'statics.gloryfinance.io',
      's2.coinmarketcap.com',
      'tokens.pancakeswap.finance',
    ],
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  reactStrictMode: false,
});

module.exports = nextConfig;
