/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	async redirects() {
		return [
			{
				source: "/((?!^$).+)", // Match all paths except the root
				destination: "/", // Redirect to the root
				permanent: true, // Use permanent redirect (301)
			},
		];
	},
};

export default nextConfig;
