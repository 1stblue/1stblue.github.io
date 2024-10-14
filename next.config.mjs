import nextra from 'nextra';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  // theme: './theme.tsx',
  themeConfig: './theme.config.tsx'
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 禁用内置图片优化功能
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              // 压缩webp
              ['imagemin-webp', {
                quality: 50, 
                metadata: 'none', 
              }],
              // 压缩jpeg
              ['imagemin-mozjpeg', { quality: 75 }],
              // 压缩png
              ['imagemin-pngquant', { quality: [0.65, 0.9] }],
              // 优化svg
              ['imagemin-svgo', {
                name: 'preset-default', // 指定SVG的插件名称
                params: {
                  overrides: {
                    // 保留viewBox属性以确保可缩放性
                    removeViewBox: false,
                    // 清理不必要的ID
                    cleanupIDs: true,
                    // 删除空属性
                    removeEmptyAttrs: true,
                    // 删除宽度和高度属性，确保响应式
                    removeDimensions: true,
                    // 进一步优化
                    collapseGroups: true, // 合并重复的组
                    convertShapeToPath: true, // 将形状转换为路径，减少复杂度
                    removeUnusedNS: true, // 移除未使用的命名空间
                    removeComments: true, // 移除注释
                    minifyStyles: true, // 压缩style标签内容
                    removeMetadata: true, // 移除元数据
                    removeDesc: true, // 移除<desc>标签
                    removeTitle: true, // 移除<title>标签
                    removeEmptyText: true, // 移除空文本节点
                  },
                },
              }],
            ],
          },
        },
      }),
    );

    return config;
  },
};

export default withNextra(nextConfig);