import React from 'react';
import CustomNavbar from '../pages/components/Navbar/Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';

export default function Navbar(props) {

  const { scrollYProgress } = useScroll();
  const progressPercentage = useTransform(scrollYProgress, [0.03, 0.95], ['0%', '100%']);

  const { pathname } = useLocation();
  const isBlogDetailPage = /^\/blog\/.+/.test(pathname) && !/^\/blog\/tags.*/.test(pathname);

  return (
   <div>
     <div className='m-auto w-full navbar z-30 fixed'>
        <CustomNavbar {...props} />
     </div>
     {
       isBlogDetailPage && (
        <div className={clsx('fixed mt-[56px] z-10 w-full', 'h-0.5', 'translate')}>
            <motion.div
              className={clsx('h-full', 'bg-blue-500')}
              style={{ width: progressPercentage }}
            />
       </div>
       )
     }
   </div>
  )
}