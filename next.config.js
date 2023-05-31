/** @type {import('next').NextConfig} */

const MOCKED_ENV_VARIABLE = "http://sth-test-etcd01.cleverdolphin.se:4001";

module.exports = {
	output: "standalone",
	async rewrites() {
		return [
			{
				source: "/api/etcd/:path*",
				destination: `${MOCKED_ENV_VARIABLE}/:path*`,
			},
		];
	},
	images: {
		domains: ["raw.githubusercontent.com"],
	},
};
