const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        loader: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        loader: "file-loader"
      }
    ]
  }
};
