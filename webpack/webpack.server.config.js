process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const fs = require('fs');
const path = require('path');

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports =
{
  name: 'server',
  target: 'node',
  entry: {
    server: './server/server.js'
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/js/',
    filename: 'compiled-[name].js',
  },
  node: {
    __dirname: false,
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
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
      },
      {
        test: /(\.css|\.scss)$/,
        exclude: /node_modules/,
        use: 'null-loader',
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};
