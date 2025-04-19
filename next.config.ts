import { NextConfig } from 'next'
import withNextIntl from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withNextIntl('./src/lib/i18n.ts')(nextConfig);
