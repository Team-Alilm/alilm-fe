import withPWA from 'next-pwa';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  outputFileTracing: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.msscdn.net',
      },
    ],
  },
};

const combinedConfig = withVanillaExtract(
  withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
  })(nextConfig)
);

export default combinedConfig;
