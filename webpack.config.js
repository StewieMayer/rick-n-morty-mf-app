const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const { dependencies } = require('./package.json');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  const isStandalone = env && env.standalone ? true : false;


  return {
    mode: env.NODE_ENV,
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@remotes': path.resolve(__dirname, 'src/remotes'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        ...(isStandalone
          ? {
              'mfCharacters/MfCharacters': path.resolve(
                __dirname,
                'src/remotes/StandaloneCharactersApp.tsx',
              ),
              'mfCharacterDetail/MfCharacterDetail': path.resolve(
                __dirname,
                'src/remotes/StandAloneCharacterDetailApp.tsx',
              ),
            }
          : {}),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new Dotenv({ path: `./.env.${env.NODE_ENV}`, systemvars: true }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ModuleFederationPlugin({
        name: 'mf-host',
        remotes: isStandalone
          ? {}
          : {
              mfCharacters: `mfCharacters@${process.env.MF_CHARACTER}/re-mf-characters.js`,
              mfCharacterDetail: `mfCharacterDetail@${process.env.MF_CHARACTER_DETAIL}/re-mf-character-detail.js`,
            },
        shared: {
          react: {
            singleton: true,
            requiredVersion: dependencies.react,
            eager: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
            eager: true,
          },
          'react-router-dom': { singleton: true, eager: true },
        },
      }),
    ],
    devServer: {
      static: './dist',
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: {
        disableDotRule: true,
        index: '/index.html',
      },
    },
  };
};
