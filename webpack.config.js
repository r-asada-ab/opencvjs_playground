const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/public/javascripts`,
        // 出力ファイル名
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
};