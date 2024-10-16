import React from 'react';
import CustomNavbar from '../pages/components/Navbar/Navbar';

export default function Navbar(props) {
  return (
    <div className='m-auto w-full navbar z-30 fixed'>
        <CustomNavbar {...props} />
    </div>
  )
}