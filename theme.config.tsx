
import dynamic from 'next/dynamic';
const Logo = dynamic(() => import('@/components/Navbar/Logo'), { ssr: false });

export default {
    logo: <Logo />,
    // project: {
    //   link: ''
    // },
    darkMode: false,
    nextThemes: {
      defaultTheme: 'light', // 默认使用亮色主题
      storageKey: 'theme', // 可选，保留用户选择的主题，如果不想保留可以省略
      attribute: 'class', // 使用 class 控制主题
      themes: ['light'], // 只使用亮色主题
    },
    
  }