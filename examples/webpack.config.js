var fs = require('fs');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
	/*
	entry: {
		//app: ['./app/main.js', '.lib/index.js'],
		app: './01-hello-world/app.js'
	},
	*/
	entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
		if (fs.statSync(path.join(__dirname, dir)).isDirectory()) {
			if(dir != 'js')
				entries[dir] = path.join(__dirname, dir, 'app.js');
		}

		return entries
	}, {}),

	output: {
		path: __dirname + "/js",
		//path: path.join(__dirname, "js"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js",
		publicPath: '/js/'
	},

	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query: {
                    presets: ["react", "es2015"],
                    cacheDirectory: true
                }
			}
		]
	}
}