const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module : {
		rules : [
			{
				test : /\.(jsx?)$/, 
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
			{
				test : /\.s?css$/, 
				use:[
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true
						}
					},
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'eval-cheap-module-source-map',
	mode:'development',
	plugins : [
		new HtmlWebpackPlugin ({
			template: 'src/index.html',
			base: 'dist'
		})
	]
};