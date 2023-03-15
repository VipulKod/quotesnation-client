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
  // other Next.js configuration options
};
