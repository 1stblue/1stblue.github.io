'use client'

import { APPLY_BUTTON_TXT } from '@/constant';
import ArrowButton from '../ui/ArrowButton';
import { useMailto } from '@/hooks/useMailto';
export default function Tryout() {

  return (
    <div onClick={() => useMailto()}>
      <ArrowButton className='bg-bp-blue-1 w-[104px] h-[32px] mr-0 rounded-[100px]' textWhite>
        {APPLY_BUTTON_TXT}
      </ArrowButton>
    </div>
  )
}
