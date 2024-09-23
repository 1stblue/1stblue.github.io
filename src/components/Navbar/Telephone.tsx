import Image from 'next/image'
import React from 'react'

export default function Telephone() {
  return (
    <div className='ml-[384]'>
       <span>
        <Image src='/icons/telephone.svg' alt="telephone" width={116} height={17} layout="responsive"/>
       </span>
    </div>
  )
}
