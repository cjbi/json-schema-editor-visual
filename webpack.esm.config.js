const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// ES Module build configuration
module.exports = {
  entry: './package/index.js',
  mode: "production",
  experiments: {
    outputModule: true, // Enable ES modules output
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    library: {
      type: 'module' // ES Module format
    },
    filename: 'main.js',
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
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};

