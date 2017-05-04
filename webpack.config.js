const getCustomTransformers = require('tsruntime/dist/transformer').default;

module.exports = {
  entry: './src/main.ts',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              getCustomTransformers
            }
          }
        ]
      }
    ]
  },

  output: {
    filename: 'dist/bundle.js'
  }
}