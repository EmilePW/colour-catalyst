module.exports = {
	entry: './app/main.js',
	output: {
		path: './app/js/dist',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3002
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}