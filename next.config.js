const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  sassOptions: {
    additionalData: `@use "styles/utils/animations.scss" as A; @use "styles/utils/variables.scss" as V;`,
    excludePaths: '/styles',
  },
};

module.exports = nextConfig;
