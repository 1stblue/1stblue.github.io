
export default function ArrowButton({ children }: Readonly<{children: React.ReactNode}> ) {
  return (
    <button className="relative px-[24px] p-auto w-[104px] h-[32px]
      text-[#000000] text-center rounded-[100px] overflow-hidden group
        border-[1px] border-[#000000]">
        <span className="w-[56px] h-[20px] font-sans font-[400] text-[14px] leading-[19.6px] text-center text-[#000000]
          inline-block transition-transform duration-300 ease-in-out group-hover:-translate-x-2">
            {children}
        </span>
        <span className="absolute inset-y-0 right-5 flex items-center 
        opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
            →
        </span>
    </button>
  )
}
