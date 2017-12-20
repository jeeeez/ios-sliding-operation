const path = require('path');
const webpack = require('webpack');
const config = require('./webpack/dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const app = express();

const compiler = webpack(config);

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';


const port = 8080;
const host = '0.0.0.0';

app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	stats: { colors: true, cached: false },
	publicPath: config.output.publicPath
}));

app.use('/node_modules', express.static(path.resolve('./node_modules')));

app.listen(port, host, function(err) {
	if (err) {
		return console.error(err);
	}
})
