/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/150/woman",
      },
    ],
  },
};

const withTM = require("next-transpile-modules")(["react-icons"]);

module.exports = withTM(nextConfig);
