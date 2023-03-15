module.exports = {
	async redirects() {
		return [
			{
				source: "/lectures",
				destination: "/lectures/UUWuvzUF7ZcRCAsWswzjNLbw",
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
};
