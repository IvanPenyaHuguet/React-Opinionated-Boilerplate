const TARGET = process.env.npm_lifecycle_event;

if (
	TARGET === 'build-dev' ||
	TARGET === 'dev' ||
	TARGET === 'start' ||
	!TARGET
) {
	module.exports = require('./config/webpack/webpack.config.dev');
	console.info('--> ./config/webpack/webpack.config.dev.js');
} else if (TARGET === 'build' || TARGET === 'build-pro') {
	module.exports = require('./config/webpack/webpack.config.prod');
	console.info('--> ./config/webpack/webpack.config.prod.js');
}
