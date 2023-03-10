const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	async redirects() {
		return [
			{
				source: "/lectures",
				destination: "/lectures/UUbMys3ID_1S8D1mZuYkoG2A",
				permanent: true,
			},
			{
				source: "/opt_lecture",
				destination: "/opt_lecture/UUbMys3ID_1S8D1mZuYkoG2A",
				permanent: true,
			},
		];
	},
	images: {
		domains: [
			"localhost",
			"blog-dev1dit.vercel.app",
			"monzureelahi.com",
			"www.monzureelahi.com",
			"i.ytimg.com",
		],
	},
	webpack: (config) => {
		config.plugins.push(
			new CopyPlugin({
				patterns: [
					{
						from: path.join(
							__dirname,
							"node_modules/ionicons/dist/ionicons/svg"
						),
						to: path.join(__dirname, "public/svg"),
					},
				],
			})
		);
		return config;
	},
};
