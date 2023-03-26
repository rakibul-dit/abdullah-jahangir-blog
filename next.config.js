module.exports = {
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
};
