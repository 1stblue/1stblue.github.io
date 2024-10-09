import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className='w-[30%] hover:opacity-75'>
        <Link href="/">
           <Image src="/logo.svg" alt='logo' width={103.35} height={24} />
        </Link>
    </div>
  )
}
