const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true, // 启用css模块化调用
            localIdentName: "[path][name]_[local]_[hash:base64:5]" // 修改生成的class的名称
          }
        }
      ]
    }]
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