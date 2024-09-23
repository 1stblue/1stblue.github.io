import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='ml-[56.65px] flex gap-[40px]'>
      <Link href='/' className='w-[28px] h-[16px] text-[14px]'>首页</Link>
      <Link href='/price' className='w-[28px] h-[16px] text-[14px]'>价格</Link>
      <Link href='/docs' className='w-[28px] h-[16px] text-[14px]'>文档</Link>
      <Link href='/blog' className='w-[28px] h-[16px] text-[14px]'>博客</Link>
    </div>
  )
}
