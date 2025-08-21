const path = require("path");
const { dependencies } = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = (env) => {
  const standaloneMode = env && env.standalone ? true : false;

  return {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
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
      new HtmlWebpackPlugin({ template: "./public/index.html" }),
      new ModuleFederationPlugin({
        name: "mfCharacters",
        filename: "re-mf-characters.js",
        exposes: {
          "./MfCharacters": "./src/App",
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
          "react-router-dom": {
            singleton: true,
            requiredVersion: dependencies["react-router-dom"],
            eager: standaloneMode,
          },
        },
      }),
    ],
    devServer: {
      static: "./dist",
      port: 3001,
      hot: true,
      open: standaloneMode,
      historyApiFallback: true,
    },
  };
};
