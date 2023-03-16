const { createProxyMiddleware } = require("http-proxy-middleware");

const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: ".env.local" });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  env: {
    API_URL: process.env.API_URL,
    // other configuration variables
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
      },
    ];
  },
  async serverMiddleware() {
    const apiProxy = createProxyMiddleware("/api", {
      target: "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    });
    return [apiProxy];
  },
};
