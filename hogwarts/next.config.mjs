/** @type {import('next').NextConfig} */

import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'hogwarts',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {},
          exposes: {
            './Nav': './src/components/Nav.js',
            './HogwartsHome': './src/pages/index.js',
            './pages-map': './pages-map.js',
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};

export default nextConfig;
