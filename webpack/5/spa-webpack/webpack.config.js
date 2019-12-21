const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
  ],
};

// {
//   test: /\.css$/,
//   use: [
//     { loader: 'style-loader', options: { base: 1000 } },
//     'css-loader'
//   ]
// }

// {
//   test: /\.css$/,
//   use: [{
//     loader: 'css-loader',
//     options: {
//       modules: true,
//       localIdentName: '[path][name]__[local]--[hash:base64:5]'
//     }
//   }]
// }