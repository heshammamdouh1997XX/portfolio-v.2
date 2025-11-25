// next.config.mts (or .ts)
import type { NextConfig } from 'next';
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Apply the NextConfig type to ensure strict type checking
const nextConfig: NextConfig = { 
   //output: 'export', // ✅ This is correctly assigned as the literal string "export"
  // ... other configs
};


export default withNextIntl(nextConfig);
