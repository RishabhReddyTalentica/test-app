const defaultWebpackConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3000/",
    chunkFilename: "[name].js?ver=[chunkhash]",
    filename: "[name].js?ver=[chunkhash]",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  // Enable sourcemaps for debugging webpack's output.
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.woff2?(\?v=\d\.\d\.\d)?$/,
        use: "url-loader?limit=10000",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        // asset/resource : Equivalent to file-loader.
        // asset/resource emits a separate file and exports the URL. Previously achievable by using file-loader.
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [],
};

module.exports = {
  defaultWebpackConfig,
};
