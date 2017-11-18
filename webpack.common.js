// https://webpack.js.org/guides/production/#setup
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NodeLoader = require('node-loader');

module.exports = {
	entry: './src/index.ts',
	target: 'node',
    resolve: {
        // import, require で指定したモジュールを探すときの拡張子
        // 拡張子が不足していると見つからない
        extensions:[ '.ts', '.tsx', '.webpack.js', '.js', '.jsx', '.json', '.node' ]
    },
	module: {
		loaders: [ { 
			// ts-loader: https://github.com/TypeStrong/ts-loader
			test: /\.ts$/, 
			loader: 'ts-loader',
            options: {
            	configFile: 'tsconfig.json'
            }
		}, { 
			test: /\.node$/, 
			loader: 'node-loader'
		}, {
			// ERROR in ./node_modules/rx-lite-aggregates/rx.lite.aggregates.js
			// https://github.com/webpack-contrib/imports-loader#disable-amd
			// https://github.com/Reactive-Extensions/RxJS/issues/1117
			test: /rx\.lite\.aggregates\.js/,
			use: 'imports-loader?define=>false'
		}
    ] },
	plugins: [
		// dist を消す
		new CleanWebpackPlugin( [ 'dist' ] ),
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	node: {
		// 起動時に発生する Not allowed to load local resource 対策
		// https://github.com/electron/electron/issues/4867
		__dirname: false,
		__filename: false
	}
};
