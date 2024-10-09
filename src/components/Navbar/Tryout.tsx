'use client'

import ArrowButton from '../ui/ArrowButton';
import { useEffect, useState } from 'react';
export default function Tryout() {
  const [txt, setTxt] = useState('免费试用');
  useEffect(() => {
    setTxt(window?.location?.pathname === '/price' ? '了解更多' : '免费试用');
  }, []);
  return (
    <div>
      <ArrowButton className='bg-bp-blue-1 w-[104px] h-[32px] mr-0 rounded-[100px]' textWhite>
        {txt}
      </ArrowButton>
    </div>
  )
}
