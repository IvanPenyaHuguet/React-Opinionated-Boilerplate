const path = require('path');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const projectPath = path.join(__dirname, '../../');

module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		compress: true,
		port: 9000,
		static: path.join(projectPath, './dist')
	},
	entry: path.join(projectPath, './src/main.tsx'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(tsx|ts)?$/,
				exclude: /(node_modules)/,
				use: {
					loader: require.resolve('swc-loader')
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name(resourcePath, resourceQuery) {
							if (!isProduction) {
								return '[path][name].[ext]';
							}
							return '[contenthash].[ext]';
						}
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(projectPath, './src/index.html')
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: path.join(projectPath, './src/**/*.{ts,tsx,js,jsx}')
			}
		}),
		new StylelintPlugin({ fix: true }),
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshPlugin()
	]
};
