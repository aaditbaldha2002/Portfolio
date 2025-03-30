import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import dotenv from 'dotenv';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/index.tsx',
  externalsType: 'umd', // Ensures compatibility with CDN
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
    fallback: {
      process: 'process/browser',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.(mp3|wav|ogg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10 * 1024,
      maxSize: 150 * 1024,
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
          enforce: true,
        },
        styledComponents: {
          test: /[\\/]node_modules[\\/]styled-components[\\/]/,
          name: 'styled-components',
          chunks: 'all',
          priority: -5,
          enforce: true,
        },
      },
    },
    runtimeChunk: 'single',
    usedExports: true,
    minimize: true,
    sideEffects: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    process.env.ANALYZE === 'true' &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: true,
      }),

    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
  },
};
