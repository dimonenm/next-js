/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['courses-top.ru']
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          // plugins: [{ removeViewBox: false }],
          plugins: [{
            name: 'preset-default',
            params: {
              override: {
                removeViewBox: false
              }
            }
          }],
        },
        titleProp: true,
      },
    });

    return config;
  },
}

module.exports = nextConfig
