var path = require('path');
var autoprefixer = require('autoprefixer');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

module.exports = {

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@': path.resolve('./src')
		}
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			enforce: 'pre',
			use: [{
				options: {
					formatter: eslintFormatter,
				},
				loader: require.resolve('eslint-loader'),
			}],
			exclude: /node_modules/
		}, {
			test: /\.(js|jsx)$/,
			loaders: ['babel-loader'],
			// exclude: /(node_modules|bower_components)/
		}, {
			test: /\.html$/,
			loader: 'html-loader',
			query: { interpolate: true },
			exclude: /(node_modules|bower_components)/
		}, {
			test: /\.(png|gif|jpg)$/,
			loader: 'file-loader'
		}, {
			test: /\.(ttf|woff|svg|eot)$/,
			loader: 'file-loader'
		}]
	}
};
