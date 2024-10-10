'use client'

import { APPLY_BUTTON_TXT } from '@/constant';
import ArrowButton from '../ui/ArrowButton';
import { mailto } from '@/lib/mailto';
export default function Tryout() {

  return (
    <div onClick={() => mailto()}>
      <ArrowButton className='bg-bp-blue-1 w-[104px] h-[32px] mr-0 rounded-[100px]' textWhite>
        {APPLY_BUTTON_TXT}
      </ArrowButton>
    </div>
  )
}
