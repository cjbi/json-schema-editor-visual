const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './package/index.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    library: {
      name: 'schema',
      type: 'umd',
      export: 'default'
    },
    filename: '[name].js',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      { 
        test: /\.less$/, 
        use: ["style-loader", "css-loader", "less-loader"] 
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ 
      filename: "main.css",
      ignoreOrder: true
    })
  ],
  externals: [
    { react: { commonjs: "react", commonjs2: "react", amd: 'react', root: ['React'] } },
    { "react-redux": { commonjs: "react-redux", commonjs2: "react-redux", amd: "react-redux" } },
    { underscore: { commonjs: "underscore", commonjs2: "underscore", amd: 'underscore', root: ['_'] } },
    { brace: { commonjs: "brace", commonjs2: "brace", amd: 'brace', root: ['ace'] } },
    { moox: { commonjs: "moox", commonjs2: "moox", amd: 'moox' } },
    { "react-dom": { commonjs: "react-dom", commonjs2: "react-dom", amd: 'react-dom', root: ['ReactDom'] } },
    { redux: { commonjs: "redux", commonjs2: "redux", amd: 'redux' } },
    { "prop-types": { commonjs: "prop-types", commonjs2: "prop-types", amd: 'prop-types' } },
    { antd: { commonjs: "antd", commonjs2: "antd", amd: 'antd' } }
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
