const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

var main = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        path: `${__dirname}/public/javascripts`,
        filename: "main.js"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.ttf$/,
          use: ['file-loader']
        }
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      fallback: {
        crypto: false, 
        fs: false,
        path: false
      }
    },
    plugins: [
      new MonacoWebpackPlugin()
    ],
    externals: {
      cv: 'cv',
    },
};

var discover = {
  mode: 'production',
  entry: './src/discover.ts',
  output: {
      path: `${__dirname}/public/javascripts`,
      filename: "discover.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  }
};

module.exports = [main, discover];