import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import { fileURLToPath } from 'url'
import 'webpack-dev-server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, '../../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html')
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new Dotenv()
  ],
  devServer: {
    static: path.resolve(__dirname, '../../build'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
}

export default config
