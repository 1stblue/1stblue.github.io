import React from 'react';
import clsx from 'clsx';
import { LandingStartActionIcon } from './icons/landing-start-action';

import Link from '@docusaurus/Link';

export const LandingHeroSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'w-full',
        'gap-4',
        'landing-sm:gap-12',
        'landing-md:gap-[59px]',
        'landing-lg:gap-20',
        className
      )}
    >
      <div className={clsx('px-2 landing-sm:px-0', 'w-full', 'relative', 'py-4')}>
        <div
          className={clsx(
            'flex',
            'flex-col',
            'justify-center',
            'gap-6',
            'z-[1]',
            'landing-lg:justify-between',
            'landing-lg:py-8'
          )}
        >
          <div className={clsx('flex', 'flex-col', 'gap-6')}>
            <h1
              className={clsx(
                'text-[32px] leading-[40px]',
                'tracking-[-0.5%]',
                'landing-sm:text-[56px] landing-sm:leading-[72px]',
                'landing-sm:max-w-[588px]',
                'landing-sm:tracking-[-2%]',
                'font-extrabold',
                'text-gray-900 '
              )}
            >
              数据因自由流动而美好
            </h1>
            <p className={clsx('font-normal', 'text-base', 'text-gray-600 ', 'landing-xs:max-w-[384px]')}>
              帮助您构建可靠、高效、可持续发展的数据流
            </p>
          </div>
          <div className={clsx('flex', 'items-center', 'justify-start', 'gap-4', 'landing-lg:gap-6')}>
            <Link
              to="/docs/getting-started"
              className={clsx(
                'self-start',
                'rounded-3xl',
                '!text-gray-0 ',
                'bg-bluepipe-blue ',
                'transition-[filter]',
                'duration-150',
                'ease-in-out',
                'hover:brightness-110',
                'py-3',
                'pl-7 pr-8',
                'landing-md:px-8',
                'landing-lg:pl-7 landing-lg:pr-8',
                'flex',
                'items-center',
                'justify-center',
                'gap-2',
                'hover:!no-underline'
              )}
            >
              <LandingStartActionIcon />
              <span className={clsx('text-base', 'font-semibold')}>快速开始</span>
            </Link>
            <Link href="https://demo.1stblue.cloud">
              <button
                type="button"
                className={clsx(
                  'self-start',
                  'appearance-none',
                  'focus:outline-none',
                  'border-none',
                  'py-3',
                  'px-6',
                  'rounded-3xl',
                  'bg-bluepipe-blue ',
                  'bg-opacity-10',
                  'text-bluepipe-blue ',
                  ' leading-5',
                  'leading-6',
                  'font-jetBrains-mono',
                  'overflow-hidden',
                  'relative',
                  'group/copy-button',
                  className
                )}
              >
                Cloud Free Tier
              </button>
            </Link>
          </div>
        </div>
        <div className={clsx('mt-8')}>
          <img src="/img/opt-video.gif" className="object-none mt-1 w-100%" alt="" />
        </div>
      </div>
    </div>
  );
};

