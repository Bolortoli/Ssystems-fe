/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js');
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  i18n: {
    locales: ['en-US', 'mn-MN'],
    defaultLocale: 'en-US',
    localeDetection: false
  },
  trailingSlash: false,

}

module.exports = nextConfig