import React from 'react';
import Link from '@docusaurus/Link';

export default function Logo() {
  return (
    <div className='w-[30%]'>
        <Link to="/">
           <img src="/logo.svg" alt='logo' width={103} height={24} />
        </Link>
    </div>
  )
}
