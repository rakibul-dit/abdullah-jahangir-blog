// const withPWA = require("next-pwa");
const withTM = require("next-transpile-modules")([
	"@ionic/react",
	"@ionic/core",
	"@stencil/core",
	"ionicons",
]);

// const nextConfig = withPWA({
// 	future: { webpack5: true },
// 	pwa: {
// 		dest: "public",
// 		register: true,
// 		// skipWaiting: true,
// 	},
// 	async redirects() {
// 		return [
// 			{
// 				source: "/lectures",
// 				destination: "/lectures/UUWuvzUF7ZcRCAsWswzjNLbw",
// 				permanent: true,
// 			},
// 			{
// 				source: "/books",
// 				destination: "/books/all",
// 				permanent: true,
// 			},
// 			{
// 				source: "/questions",
// 				destination: "/questions/all",
// 				permanent: true,
// 			},
// 		];
// 	},
// 	images: {
// 		domains: [
// 			"localhost",
// 			"blog-dev1dit.vercel.app",
// 			"abdullahjahangir.com",
// 			"www.abdullahjahangir.com",
// 			"i.ytimg.com",
// 		],
// 	},
// 	experimental: {
// 		scrollRestoration: true,
// 	},
// });

const nextConfig = {
	async redirects() {
		return [
			{
				source: "/lectures",
				destination: "/lectures/UUWuvzUF7ZcRCAsWswzjNLbw",
				permanent: true,
			},
			{
				source: "/books",
				destination: "/books/all",
				permanent: true,
			},
			{
				source: "/questions",
				destination: "/questions/all",
				permanent: true,
			},
		];
	},
	images: {
		domains: [
			"localhost",
			"blog-dev1dit.vercel.app",
			"abdullahjahangir.com",
			"www.abdullahjahangir.com",
			"i.ytimg.com",
		],
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = withTM(nextConfig);
