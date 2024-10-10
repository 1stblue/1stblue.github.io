import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  // theme: './theme.tsx',
  themeConfig: './theme.config.tsx'
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 禁用图片优化
  },
};

export default withNextra(nextConfig);