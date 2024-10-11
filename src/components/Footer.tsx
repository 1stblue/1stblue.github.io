import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MAIL_ADDRESS } from '@/constant'

export default function Footer() {
  return (
    <footer className=' bg-black text-white'>
      <div className="max-w-[1920px] m-auto">
        <div className='w-[1120px] m-auto bg-black'>
          <div className='flex flex-col  h-[518px]'>
            <div className='flex justify-between mt-[96px]'>
              <div className='text-white'>
                <Image src="/logo-footer.svg" alt='logo' width={124.02} height={28.8} />
                <div className='mt-[31.2px]'>
                  <p className='mt-[12px]
                  font-sans font-[400] text-[16px] leading-[28px]'>
                    余杭区仓前街道海创科技中心 3 幢</p>
                  {/* <p className=' mt-[12px]
                  font-sans font-[400] text-[16px] leading-[19px]'>
                    400-1234-888</p> */}
                  <p className=' mt-[12px]
                   font-sans font-[400] text-[16px] leading-[19px]'>
                    <a href={`mailto:${MAIL_ADDRESS}`}>{MAIL_ADDRESS}</a>
                  </p>
                </div>
              </div>
              <div className='flex'>
              <div>
                <div className='
                font-sans font-[600] text-[14px] leading-[33.6px]'>官网</div>
                <div className=' mt-[18px]
                font-sans font-[400] text-[14px] leading-[33.6px]'>
                  <div>
                    <Link href="/">首页</Link>
                  </div>
                  <div>
                    <Link href="/price">价格</Link>
                  </div>
                  {/* <div>
                    <Link href="/blog/2023-10-11-oracle-split-read">博客</Link></div>
                  <div>
                    <Link href="/docs/getting-started">技术文档</Link>
                  </div> */}
                </div>
              </div>
              {/* <div className='ml-[72px] mr-[48px]'>
                  <div className='font-sans font-[600] text-[14px] leading-[33.6px]'>产品</div>
                  <div className=' mt-[18px]
                   font-sans font-[400] text-[14px] leading-[33.6px]'>
                    <div>仪表盘</div>
                    <div>工单</div>
                    <div>订单</div>
                  </div>
              </div> */}
              </div>
            </div>
            
            <div className='h-[49px] mt-[96px]
            flex justify-between text-[#FFFFFF]
            border-t-[1px] border-[#FFFFFF4D]'>
              <div className=' mt-[32px]
              font-sans font-[400] text-[12px] leading-[16.8px]'>
                &copy; 2022-2024 杭州萃蓝网络科技有限公司 版权所有</div>
              <div className='mt-[32px]
              font-sans font-[400] text-[12px] leading-[16.8px] text-right'>
                <a target="_blank" href="https://beian.miit.gov.cn">浙ICP备2024076741号</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
