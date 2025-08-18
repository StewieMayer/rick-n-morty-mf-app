const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");
const path = require("path");

module.exports = (env, argv) => {
  const standaloneMode = env && env.standalone ? true : false;

  return {
    entry: "./src/index.tsx",
    mode: "development",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ModuleFederationPlugin({
        name: "mfCharacterDetail",
        filename: "re-mf-character-detail.js",
        exposes: {
          "./MfCharacterDetail": "./src/App",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
            eager: standaloneMode,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
            eager: standaloneMode,
          },
        },
      }),
    ],
    devServer: {
      static: "./dist",
      port: 3002,
      hot: true,
      open: standaloneMode,
      historyApiFallback: true,
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
  };
};
