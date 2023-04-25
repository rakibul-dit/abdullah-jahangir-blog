const withPWA = require("next-pwa");

module.exports = withPWA({
	future: { webpack5: true },
	pwa: {
		dest: "public",
		register: true,
		// skipWaiting: true,
	},
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
});
