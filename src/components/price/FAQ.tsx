import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function FAQ() {
  return (
    <section>
      <div className='w-[67%] m-auto'>
        <div className='flex flex-col items-center'>
          <div className="h-[50px] mt-[128px]
          font-sans font-[600] text-[36px] leading-[50.4px] text-center text-[#000000]">
            FAQ
          </div>
          <div className="w-[66%] mt-[60px] mb-[160px]">
            <Accordion type="single" collapsible
             className="ml-[24px] mt-[20px]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="h-[64px]
                font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                支持什么样的支付方式?
                </AccordionTrigger>
                {/* <AccordionContent className="mt-[28px]
                font-sans font-[400] text-[18px] leading-[24px] text-[#000000]">
                Bluepipe致力于确保您的数据迁移过程不仅准确无误，而且高效可靠。采用先进的<br />Exactly Once一致性保证语义，让您的数据交付过程透明、可追踪，从而实现真正的数据安全和业务连续性
                </AccordionContent> */}
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="h-[64px]
                font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                可以更改不同版本的产品吗？
                </AccordionTrigger>
                <AccordionContent className="mt-[28px]
                font-sans font-[400] text-[18px] leading-[24px] text-[#000000]">
                Bluepipe致力于确保您的数据迁移过程不仅准确无误，而且高效可靠。采用先进的<br />Exactly Once一致性保证语义，让您的数据交付过程透明、可追踪，从而实现真正的数据安全和业务连续性
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="h-[64px]
                font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                可以变更规格，扩容或缩容吗？
                </AccordionTrigger>
                <AccordionContent className="mt-[28px]
                font-sans font-[400] text-[18px] leading-[24px] text-[#000000]">
                Bluepipe致力于确保您的数据迁移过程不仅准确无误，而且高效可靠。采用先进的<br />Exactly Once一致性保证语义，让您的数据交付过程透明、可追踪，从而实现真正的数据安全和业务连续性
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="h-[64px]
                font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                BYOC 和企业版是如何定价的？
                </AccordionTrigger>
                <AccordionContent className="mt-[28px]
                font-sans font-[400] text-[18px] leading-[24px] text-[#000000]">
                Bluepipe致力于确保您的数据迁移过程不仅准确无误，而且高效可靠。采用先进的<br />Exactly Once一致性保证语义，让您的数据交付过程透明、可追踪，从而实现真正的数据安全和业务连续性
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="h-[64px]
                font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                BYOC 和企业版可以免费使用吗？
                </AccordionTrigger>
                <AccordionContent className="mt-[28px]
                font-sans font-[400] text-[18px] leading-[24px] text-[#000000]">
                Bluepipe致力于确保您的数据迁移过程不仅准确无误，而且高效可靠。采用先进的<br />Exactly Once一致性保证语义，让您的数据交付过程透明、可追踪，从而实现真正的数据安全和业务连续性
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
