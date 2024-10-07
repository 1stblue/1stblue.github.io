import Image from "next/image"
import ArrowButton from "../ui/ArrowButton"

export default function Package() {
    const list = [
        {
            title: '社区版',
            desc: '面向个人，数字化起步阶段企业及个人，高效协同、管理团队、激发活力',
            price: '0',
            discount: [],
            preList: '',
            list: ['所有基础功能', '免费连接器', '不限制速率', '最大 2 并发', '单用户', '5*8 社区支持'],
            
        },
        {
            title: '企业版',
            desc: '面向公司，管理有序、协同便捷、形象专业，深度协同、灵活开放',
            price: '2222',
            discount: ['限时优惠：满10送2月'],
            preList: '包含企业版所有功能，以及：',
            list: ['商业连接器', '按订单配置最大并发数；', '多节点容灾和负载均衡；', '基于 OAuth2.0 的单点登录', '细粒度权限控制', '审计日志', '7*24专家支持']
        },
        {
            title: '专属版',
            desc: '面向伙伴，深度协同、资产安全、灵活开放安全合规、自主可控、专属AI',
            price: '',
            discount: [],
            preList: '包含企业版所有功能，以及：',
            list: ['品牌化', '私有连接器']
        }
    ]
  return (
    <section className="w-full bg-gradient-to-b from-[#EFF1FC] to-[#F9F9FE]">
        <div className="w-[1680px] m-auto h-[858px] bg-gradient-to-b from-[#EFF1FC] to-[#F9F9FE]">
           <div className="w-[1120px] m-auto flex flex-col items-center">
              <div className="w-[395px] h-[58px] mt-[64px]
              font-sans font-[600] text-[48px] leading-[57.6px] text-center text-[#000000] ">
              选择适合你的服务
              </div>
              <div className="mt-[40px] h-[632px] flex gap-[32px]">
                {list.map((item, index) => (
                        <div
                         key={index}
                         className="w-[352px] h-[632px]
                         rounded-[8px] border-[1px] border-[#D0D0D0] bg-[#FFFFFF]
                         pl-[24px] pt-[38px]">
                            <div className="w-[72px] h-[34px]
                            font-sans font-[600] text-[24px] leading-[33.6px] text[#000000]">
                                {item.title}
                            </div>
                            <div className="w-[303px] h-[48px] mt-[7px]
                            font-sans font-[400] text-[18px] leading-[24px] text-[#000000]">
                                {item.desc}
                            </div>
                            <div className="text-[#0165FF] h-[38px] mt-[26px]">
                                {!!item.price ? <>
                                <span className="w-[16px] h-[29px]
                                font-[SF Pro] font-[590] text-[24px] leading-[28.64px] ">¥</span>
                                <span className="h-[38px] mx-[4px] font-[590] text-[32px] leading-[38.19px] ">{item.price}</span>
                                <span className="w-[100px] h-[28px]
                                font-sans font-[600] text-[20px] leading-[28px]">元/链路/月</span></> : <>
                                <span className="h-[38px] mx-[4px] font-[590] text-[32px] leading-[38.19px] ">定制价格</span>
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
                            <div>
                                <ArrowButton
                                   className="w-[304px] h-[52px] rounded-[8px] bg-[#0165FF] hover:bg-[#0165FF] mt-[20px]
                                flex justify-center items-center font-[600]"
                                    textWhite
                                    textClassName="text-[16px] leading-[22.4px]"
                                    imgClassName="right-[115px]"
                                >
                                    即将邀测
                                </ArrowButton>
                            </div>
                            <div className="mt-[33px]">
                                {item.preList && <div className="h-[22px]
                                font-sans font-[400] text-[16px] leading-[22.4px] text-[#666666]">{item.preList}</div>}
                                <div className="mt-[16px]">
                                    {item.list.map((n, index) => (
                                        <div className="flex" key={index}>
                                            <Image src={'/icons/勾.svg'} alt="" width={25} height={25} />
                                            <p className="ml-[15px]
                                            font-sans font-[400] text-[16px] leading-[32px] text-[#666666]">{n}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>))
                }
              </div>
           </div>   
        </div>
    </section>
  )
}
