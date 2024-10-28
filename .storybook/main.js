module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app']],
      },
    })
    return config
  },

  addons: ['@storybook/addon-webpack5-compiler-babel']
};
