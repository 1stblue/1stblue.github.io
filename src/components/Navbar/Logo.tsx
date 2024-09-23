import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='flex items-center py-[16px]'>
        <Image src="./logo.svg" alt='logo' width={103.35} height={24} layout="responsive" />
    </div>
  )
}
