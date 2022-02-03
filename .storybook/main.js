const path = require('path');

module.exports = {
  stories: [
    '../components/01-atoms/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../components/01-atoms/**/*.docs.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    });

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../')
    ];

    return config;
  }
};
