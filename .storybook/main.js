
const path = require('path')
module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../components/Introduction.stories.mdx",
    "../components/Install.stories.mdx",
    "../components/Components.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-postcss'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        }, 
        {
          loader: "css-loader"
        }, 
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            }
          }
        }
      ]
    })
    return config;
  }

}

