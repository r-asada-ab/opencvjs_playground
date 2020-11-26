const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

var main = {
    mode: 'development',
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
    },
    plugins: [
      new MonacoWebpackPlugin()
    ],
    resolve: {
      fallback: {
        crypto: false, 
        fs: false,
        path: false
      }
    }
};

var discover = {
  mode: 'development',
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