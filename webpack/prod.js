var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var commonConfig = require('./common');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',

	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'index.js'
	},


	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				ENV: JSON.stringify('production'),
				version: JSON.stringify(require('../package.json').version)
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	resolve: commonConfig.resolve,

	module:  commonConfig.module
};
