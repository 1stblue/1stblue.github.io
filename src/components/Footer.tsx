import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='w-full bg-black text-white'>
      <div className="w-[1680px] m-auto">
        <div className='flex flex-col w-[1120px] m-auto h-[518px]'>
          <div className='flex mt-[96px]'>
            <div className='text-white'>
              <Image src="./logo-footer.svg" alt='logo' width={124.02} height={28.8} />
              <div className='w-[257.83px] h-[121px] mt-[31.2px]'>
                <p className='w-[257.83px] h-[19px]
                font-sans font-[400] text-[16px] leading-[19.36px]'>
                  杭州萃蓝网络科技有限公司</p>
                <p className='w-[257.83px] h-[28px] mt-[12px]
                font-sans font-[400] text-[16px] leading-[28px]'>
                  余杭区仓前街道海创科技中心 3 幢</p>
                <p className='w-[257.83px] h-[19px] mt-[12px]
                font-sans font-[400] text-[16px] leading-[19px]'>
                  400-1234-888</p>
                <p className='w-[257.83px] h-[19px] mt-[12px]
                font-sans font-[400] text-[16px] leading-[19px]'>
                  hi@1stblue.com</p>
              </div>
            </div>
            <div className='ml-[550.17px]'>
              <div className='w-[28px] h-[34px]
              font-sans font-[600] text-[14px] leading-[33.6px]'>官网</div>
              <div className='w-[96px] h-[136px] mt-[18px]
              font-sans font-[400] text-[14px] leading-[33.6px]'>
                <div>首页</div>
                <div>价格</div>
                <div>博客</div>
                <div>技术文档</div>
              </div>
            </div>
            <div className='w-[96px] h-[154px] ml-[72px]'>
              <div className='w-[28px] h-[34px]
              font-sans font-[600] text-[14px] leading-[33.6px]'>产品</div>
              <div className='w-[96px] h-[102px] mt-[18px]
              font-sans font-[400] text-[14px] leading-[33.6px]'>
                <div>仪表盘</div>
                <div>工单</div>
                <div>订单</div>
              </div>
            </div>
          </div>
          
          <div className='h-[49px] mt-[96px]
          flex justify-between text-[#FFFFFF]
          border-t-[1px] border-[#FFFFFF4D]'>
            <div className='w-[221px] h-[17px] mt-[32px]
            font-sans font-[400] text-[12px] leading-[16.8px]'>
              ©️ 2024 1stBlue LTD. All rights reserved</div>
            <div className='w-[297px] h-[17px] mt-[32px]
             font-sans font-[400] text-[12px] leading-[16.8px] text-right'>
              沪ICP备20017118号-1</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
