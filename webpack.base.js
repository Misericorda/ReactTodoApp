const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const envFile = require('node-env-file');


try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {
  alert('Could not find env file!')
  throw e
}

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss?$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, "node_modules/foundation-sites/scss")]
            }
          }
        ]
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader"},
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'React Boilerplate'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      BABEL_ENV: JSON.stringify(process.env.BABEL_ENV),
      API_KEY: JSON.stringify(process.env.API_KEY),
      AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
      DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
      STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
      PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
      MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
      GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN),
    }),
  ],
  resolve: {
    modules: [
      __dirname,
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  devtool: process.env.NODE_ENV === 'development'
    ? 'cheap-module-eval-source-map'
    : undefined
};
