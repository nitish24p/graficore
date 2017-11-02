process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const VENDOR_LIBS = [
  'jquery', 'materialize-css'
];

module.exports = {
  entry: {
    bundle: ['./src/scripts/index.js'],
    vendors: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, '..', 'dist', 'build'),
    filename: '[name].[hash].js',
    publicPath: '/js/'
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [require.resolve('babel-preset-react-app')],
              cacheDirectory: true,
            }
          }
        ],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        })
      },
      {
        test: /\.scss$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000 // Limit in Kb for file size to be included
            }
          }
        ]
      }
    ]
  },
  stats: {}, // <- Webpack stats details for bundles
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest']
    }),
    function() {
      this.plugin('done', function(stats) {
        require('fs').writeFileSync(
          path.join(__dirname, '..', 'dist', 'build','stats.json'),
          JSON.stringify(stats.toJson().assetsByChunkName));
      });
    },
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('dev')
      }
    }),
    new CleanWebpackPlugin(['./dist/build'], {
      verbose: true,
      dry: false,
      root: path.join(__dirname, '..'),
      //watch: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: false,
      extractComments: true
    }),
  ]
};
