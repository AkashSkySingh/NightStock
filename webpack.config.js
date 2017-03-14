module.exports = {
  entry: 'frontend/nsapp.jsx',
  output: {
    path: 'app/assets/javascripts',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map'
};
