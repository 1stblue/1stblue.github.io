'use client'

import Image from "next/image"
import ArrowButton from "../ui/ArrowButton"
import { CALL_BUTTON_TXT, SOON_BUTTON_TXT } from "@/constant"
import { mailto } from "@/lib/mailto"
import { useEffect, useState } from "react"

export default function Package() {
    const list = [
        {
            title: '社区版',
            desc: '面向个人，或非生产场景',
            price: '68',
            discount: ['限时免费'],
            preList: '',
            list: ['所有基础功能', '免费连接器', '不限制速率', '最多 2 链路', '单节点运行', '单用户，账密认证', '5 * 8 社区支持'],
            
        },
        {
            title: '企业版',
            desc: '满足高可用与合规要求',
            price: '680',
            discount: ['限时优惠：满10送2月'],
            preList: '包含企业版所有功能，以及：',
            list: ['商业连接器', '按订单配置链路数', '多节点容灾和负载均衡', 'SSO、权限控制和审计', '开放API与集成', '7 * 24 专家支持']
        },
        {
            title: '专属版',
            desc: '面向伙伴，或大型企业',
            price: '',
            discount: [],
            preList: '企业版所有功能，以及：',
            list: ['品牌化', '私有连接器', '多地域、多供应商支持', '数据架构咨询与治理']
        }
    ]
    /** 动态设置 arrowButton 上面div的高度 */
    const [topSize, setTopSize] = useState(0);
    useEffect(() => {
        let maxLen = 0;
        list.forEach(item => {
            if(item.desc?.length > maxLen) {
                maxLen = item.desc?.length;
            }
        });
        setTopSize(Math.ceil(maxLen / 16) * 24 + 67); // 67 = 34 + 7 + 26
    }, []);
  return (
    <section className="bg-gradient-to-b from-[#EFF1FC] to-[#F9F9FE]">
        <div className="max-w-[1920px] m-auto bg-gradient-to-b from-[#EFF1FC] to-[#F9F9FE]">
        <div className="w-[1120px] m-auto bg-gradient-to-b from-[#EFF1FC] to-[#F9F9FE]">
           <div className="flex flex-col items-center">
              <div className="mt-[64px]
              font-sans font-[600] text-[48px] leading-[58px] text-center text-[#000000] ">
              选择适合您的方案
              </div>
              <div className="mt-[40px] mb-[64px] flex gap-[32px] w-full">
                {list.map((item, index) => (
                        <div
                         key={index}
                         className="flex-1 rounded-[8px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF] px-[24px] py-[38px]"
                         >
                          <div style={{ height: `${topSize}px` }}>
                            <div className="font-sans font-[600] text-[24px] leading-[34px] text[#000000]">
                                {item.title}
                            </div>
                            <div className="mt-[7px] font-sans font-[400] text-[18px] leading-[24px] text-[#000000]">
                                {item.desc}
                            </div>
                            
                          </div>

                          {/* 保证ArrowButton位置固定 */}
                          <div>
                            {/* <div>
                                <div className="text-[#0165FF]">
                                    {!!item.price ? <>
                                    <span className="
                                    font-[SF Pro] font-[590] text-[24px] leading-[28.64px] ">¥</span>
                                    <span className=" mx-[4px] font-[590] text-[32px] leading-[38.19px] ">{item.price}</span>
                                    <span className="
                                    font-sans font-[600] text-[20px] leading-[28px]">元/链路/月</span></> : <>
                                    <span className=" mx-[4px] font-[590] text-[32px] leading-[38.19px] ">定制价格</span>
                                    </>
                                    }
                                </div>
                                <div className="h-[26px]">
                                    {item.discount?.map((i, index) => (
                                        <span key={index} className="mt-[3px] bg-[#11E2D833]
                                        rounded-[4px] border-[1px] border-[#3B8783]
                                        px-[8px] py-[3px]
                                        font-sans font-[600] text-[14px] leading-[19.6px] text-[#0B5362]
                                        ">{i}</span>
                                    ))}
                                </div>
                            </div> */}
                            <div className="flex justify-center items-center rounded-[8px] bg-[#0165FF] hover:bg-[#0165FF] mt-[20px] w-[304px] h-[52px]" onClick={() => index === 2 && mailto()} >
                                <ArrowButton
                                  textWhite
                                  textClassName="text-[16px] leading-[22px]"
                                >
                                    {index === 2 ? CALL_BUTTON_TXT : SOON_BUTTON_TXT}
                                </ArrowButton>
                            </div>
                            <div className="mt-[33px]">
                                {item.preList && <div className="pb-[16px]
                                font-sans font-[400] text-[16px] leading-[22px] text-[#666666]">{item.preList}</div>}
                                <div className="mt-[16px]">
                                    {item.list.map((n, index) => (
                                        <div key={index} className="flex gap-[15px] font-sans font-[400] text-[16px] leading-[32px] text-[#666666]">
                                            <div className="flex-shrink-0 w-[20px] h-[32px] flex items-center">
                                              <Image className="inline-block" src={'/icons/right.svg'} alt="" width={20} height={20} />
                                            </div>
                                            <p>{n}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                          </div>
                        </div>))
                }
              </div>
           </div>   
        </div>
        </div>
    </section>
  )
}
