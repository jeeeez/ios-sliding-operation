const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const commonConfig = require('./common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: {
		main: [
			'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
			'./demo/index.jsx'
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/' // hot loader publish dir
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			template: path.resolve('./demo/index.html'),
			chunks: ['main']
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				ENV: JSON.stringify('development')
			}
		}),
	],
	resolve: commonConfig.resolve,
	module: {
		rules: commonConfig.module.rules.concat({
			test: /\.(sc|c)ss$/,
			use: [
				{ loader: 'style-loader', options: { hmr: false, sourceMap: true } },
				{ loader: 'css-loader', options: { sourceMap: true } },
				{ loader: 'postcss-loader', options: { sourceMap: true } },
				{ loader: 'sass-loader', options: { sourceMap: true } }
			]
		})
	}
};
