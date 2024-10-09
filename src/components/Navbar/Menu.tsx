import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='w-[70%] flex gap-[40px]'>
      <Link href='/' className='relative text-[14px] group'>
        首页
        <span className="absolute left-0 bottom-[-6px] w-full h-[1px] bg-black 
        origin-bottom scale-y-0 translate-y-[1px] transition-transform duration-700 ease-in-out
        group-hover:scale-y-100 group-hover:translate-y-0"></span>
      </Link>
      <Link href='/price' className='relative text-[14px] group'>
        价格
        <span className="absolute left-0 bottom-[-6px] w-full h-[1px] bg-black 
        origin-bottom scale-y-0 translate-y-[1px] transition-transform duration-700 ease-in-out
        group-hover:scale-y-100 group-hover:translate-y-0"></span>
      </Link>
      <Link href='/docs/getting-started' className='relative text-[14px] group'>
        文档
        <span className="absolute left-0 bottom-[-6px] w-full h-[1px] bg-black 
        origin-bottom scale-y-0 translate-y-[1px] transition-transform duration-700 ease-in-out
        group-hover:scale-y-100 group-hover:translate-y-0"></span>
      </Link>
      <Link href='/blog' className='relative text-[14px] group'>
        博客
        <span className="absolute left-0 bottom-[-6px] w-full h-[1px] bg-black 
        origin-bottom scale-y-0 translate-y-[1px] transition-transform duration-700 ease-in-out
        group-hover:scale-y-100 group-hover:translate-y-0"></span>
      </Link>
    </div>
  )
}
