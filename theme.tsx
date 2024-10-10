'use client'

import { useRouter } from 'next/router';
import DocsTheme from 'nextra-theme-docs'; // 导入文档主题
import BlogTheme from 'nextra-theme-blog'; // 导入博客主题
import 'nextra-theme-docs/style.css'; // 文档主题的样式
import 'nextra-theme-blog/style.css'; // 博客主题的样式
import type { NextraThemeLayoutProps } from 'nextra';
import './docs.css';
// import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';


export default function Layout(props: NextraThemeLayoutProps) {
  const { children, pageOpts, pageProps, themeConfig } = props; // 解构所需的属性
  const router = useRouter();

  // 根据路径判断使用不同的主题
  if (router.pathname.startsWith('/docs')) {
    // 如果路径是 /docs，使用文档主题
    return (
      <div>
        <DocsTheme {...{ pageOpts, pageProps, themeConfig }}>
        {children}
        </DocsTheme>
        {/* <Footer /> */}
      </div>
    );
  }

  if (router.pathname.startsWith('/blog')) {
    // 如果路径是 /blog，使用博客主题
    return (
      <BlogTheme {...{ pageOpts, pageProps, themeConfig }}>
        {children}
      </BlogTheme>
    );
  }

//   // 默认布局
//   return (
//     <div>
//       <h1>My Custom Theme</h1>
//       <div style={{ border: '1px solid' }}>{children}</div>
//     </div>
//   );
}