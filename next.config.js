/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  i18n: {
    locales: ['en-US', 'mn-MN'],
    defaultLocale: 'mn-MN',
    localeDetection: false
  },
  trailingSlash: false,
}

module.exports = nextConfig