import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className='flex items-center py-[16px]'>
        <Link href="/">
           <Image src="./logo.svg" alt='logo' width={103.35} height={24} layout="responsive" />
        </Link>
    </div>
  )
}
