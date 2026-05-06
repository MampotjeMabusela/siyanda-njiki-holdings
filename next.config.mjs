/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // OneDrive/Windows can corrupt webpack filesystem cache and cause missing chunks/CSS on refresh.
      // Keep dev cache in memory to prevent intermittent "missing required error components" issues.
      config.cache = {
        type: "memory",
      };
    }
    return config;
  },
};

export default nextConfig;
