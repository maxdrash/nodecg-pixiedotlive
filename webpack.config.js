const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const env = process.env.NODE_ENV

const config = {}

const entryPoints = {
  index: './src/index.tsx',
}

const createTemplate = name =>
  new HtmlWebpackPlugin({
    filename: `${name}.html`,
    chunks: ['vendor', name],
    template: './src/index.html',
  })

config.default = {
  entry: entryPoints,

  output: {
    path: path.resolve('./graphics/'),
    publicPath: '/bundles/nodecg-pixiedotlive/graphics/',
    filename: 'bundle/[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)$/i,
        use: {
          loader: 'file-loader',
          options: {
            context: path.resolve('./src/'),
            name: 'assets/[path][name].[ext]',
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: path.resolve('./src/'),
              name: 'assets/[path][name].[ext]',
            },
          },
          {
            loader: 'img-loader',
            options: {
              optipng: false,
              pngquant: {
                floyd: 0.5,
                speed: 2,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          {
            loader: 'img-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: true }, { convertPathData: false }],
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), ...Object.keys(entryPoints).map(createTemplate)],
}

config.production = Object.assign({}, config.default, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
})

config.development = Object.assign({}, config.default, {
  mode: 'development',
  devtool: 'inline-source-map',
})

module.exports = env === 'development' ? config.development : config.production