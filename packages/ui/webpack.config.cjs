const path = require('path');

module.exports = {
  entry: './src/index.ts', // replace with the entry point of your SDK
  output: {
    filename: 'main.js', // the output bundle file
    path: path.resolve(__dirname, 'dist'), // the output directory
    library: {
      name: 'ghopay-sdk', // replace with your library name
      type: 'umd', // supports multiple module types
    },
    globalObject: 'this', // ensures the library works in node and browser
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules|\.stories\.(js|jsx|tsx)$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

};