import Link from 'next/link'
import React from 'react'

export default function Menu() {
  const List = [
    {
      name: '首页',
      href: '/'
    },
    {
      name: '价格',
      href: '/price'
    },
    // {
    //   name: '文档',
    //   href: '/docs/getting-started'
    // },
    // {
    //   name: '博客',
    //   href: '/blog/2023-10-11-oracle-split-read'
    // }
  ];
  return (
    <div className='w-[70%] flex gap-[40px]'>
      {List?.map((item, index) => (
        <Link href={item.href} className='relative text-[14px] group' key={index}>
         {item?.name}
        <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black 
         origin-bottom scale-y-0 translate-y-[1px] transition-transform duration-200 ease-in-out
         group-hover:scale-y-100 group-hover:translate-y-0"></span>
        </Link>
      ))}
    </div>
  )
}
