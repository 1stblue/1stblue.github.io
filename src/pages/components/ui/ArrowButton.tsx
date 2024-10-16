import Image from "next/image";
import BlackArrow from '../../../../static/black-arrow.svg';
import WhiteArrow from '../../../../static/white-arrow.svg';
import clsx from "clsx";

interface ArrowButtonProps {
  children: React.ReactNode,
  className?: string,
  textClassName?: string,
  imgClassName?: string,
  textWhite?: boolean, 
}
export default function ArrowButton({ children, className, textClassName, imgClassName, textWhite }: Readonly<ArrowButtonProps> ) {
  return (
    <button className={clsx("relative px-[24px] p-auto h-[32px] font-sans font-[400] text-[#000000] text-center overflow-hidden group", className)}>
        <span className={clsx("h-[20px] text-[14px] leading-[20px] text-center  inline-block transition-transform duration-300 ease-in-out group-hover:-translate-x-2", textClassName, textWhite ? 'text-white' : 'text-[#000000]')}>
            {children}
        </span>
        <span className={clsx("absolute inset-y-0 right-5 flex items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out", imgClassName)}>
            <img src={textWhite ? '/white-arrow.svg' : '/black-arrow.svg'} alt="arrow" />
        </span>
    </button>
  )
}
