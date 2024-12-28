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
      {
        protocol: 'https',
        hostname: 'img.29cm.co.kr',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
