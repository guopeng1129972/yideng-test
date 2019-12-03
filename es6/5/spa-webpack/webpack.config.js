const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
  module:{
    rules: [{
      test: /\.css$/,
      use: ['style-loader', {
        loader:'css-loader?modules&localIdentNmae=[name]_[local]=[hash:base64:5]'
      }/*'css-loader'*/]
    }]
  },
  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
  ],
};