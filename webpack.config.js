const tsRuntimeTransformer = require('tsruntime/dist/transformer').default;

function getCustomTransformers() {
  return {
    before: [tsRuntimeTransformer]
  }
}

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
              getCustomTransformers: getCustomTransformers
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