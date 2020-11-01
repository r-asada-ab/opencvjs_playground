
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
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    }
};