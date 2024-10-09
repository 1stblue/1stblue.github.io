import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=' bg-black text-white'>
      <div className="max-w-[1920px] m-auto">
        <div className='w-[67%] m-auto'>
          <div className='flex flex-col  h-[518px]'>
            <div className='flex justify-between mt-[96px]'>
              <div className='text-white'>
                <Image src="./logo-footer.svg" alt='logo' width={124.02} height={28.8} />
                <div className='mt-[31.2px]'>
                  <p className='
                  font-sans font-[400] text-[16px] leading-[19.36px]'>
                    杭州萃蓝网络科技有限公司</p>
                  <p className='mt-[12px]
                  font-sans font-[400] text-[16px] leading-[28px]'>
                    余杭区仓前街道海创科技中心 3 幢</p>
                  <p className=' mt-[12px]
                  font-sans font-[400] text-[16px] leading-[19px]'>
                    400-1234-888</p>
                  <p className=' mt-[12px]
                  font-sans font-[400] text-[16px] leading-[19px]'>
                    hi@1stblue.com</p>
                </div>
              </div>
              <div className='flex'>
              <div>
                <div className='
                font-sans font-[600] text-[14px] leading-[33.6px]'>官网</div>
                <div className=' mt-[18px]
                font-sans font-[400] text-[14px] leading-[33.6px]'>
                  <div>首页</div>
                  <div>价格</div>
                  <div>博客</div>
                  <div>技术文档</div>
                </div>
              </div>
              <div className='ml-[72px] mr-[48px]'>
                <div className='
                font-sans font-[600] text-[14px] leading-[33.6px]'>产品</div>
                <div className=' mt-[18px]
                font-sans font-[400] text-[14px] leading-[33.6px]'>
                  <div>仪表盘</div>
                  <div>工单</div>
                  <div>订单</div>
                </div>
              </div>
              </div>
            </div>
            
            <div className='h-[49px] mt-[96px]
            flex justify-between text-[#FFFFFF]
            border-t-[1px] border-[#FFFFFF4D]'>
              <div className=' mt-[32px]
              font-sans font-[400] text-[12px] leading-[16.8px]'>
                ©️ 2024 1stBlue LTD. All rights reserved</div>
              <div className='mt-[32px]
              font-sans font-[400] text-[12px] leading-[16.8px] text-right'>
                浙ICP备2024076741号</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
