const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new ModuleFederationPlugin({
			name: "host",
			remotes: {
				app1: "app1@http://localhost:8001/remoteEntry.js",
			},
		}),
	],
};
