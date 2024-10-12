import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  // theme: './theme.tsx',
  themeConfig: './theme.config.tsx'
});

const nextConfig = {
  output: 'export',
};

export default withNextra(nextConfig);