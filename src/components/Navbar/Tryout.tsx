'use client'
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
export default function Tryout() {
  const [txt, setTxt] = useState('免费试用');
  useEffect(() => {
    setTxt(window?.location?.pathname === '/price' ? '了解更多' : '免费试用');
  }, []);
  return (
    <div className='ml-[32px]'>
      <Button variant="bp-primary-radius" className='bg-bp-blue-1 w-[104px] h-[32px] mr-0'>
        {txt}
      </Button>
    </div>
  )
}
