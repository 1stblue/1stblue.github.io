import React from 'react';
import clsx from 'clsx';
import { LandingHeroGithubStars } from './landing-hero-github-stars';
import { LandingStartActionIcon } from './icons/landing-start-action';

import { LandingHeroAnimation } from './landing-hero-animation';
import { LandingCopyCommandButton } from './landing-copy-command-button';
import Link from '@docusaurus/Link';
import { LandingHeroShowcaseSection } from './landing-hero-showcase-section';

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
      <div
        className={clsx(
          'px-2 landing-sm:px-0',
          'flex',
          'flex',
          'w-full',
          'relative',
          'min-h-[360px]',
          'landing-lg:min-h-[480px]',
          'py-4'
        )}
      >
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
          {/* <LandingHeroGithubStars /> */}
          <div className={clsx('flex', 'flex-col', 'gap-6')}>
            <h1
              className={clsx(
                'text-[32px] leading-[40px]',
                'tracking-[-0.5%]',
                'landing-sm:text-[56px] landing-sm:leading-[72px]',
                'landing-sm:max-w-[588px]',
                'landing-sm:tracking-[-2%]',
                'font-extrabold',
                'text-gray-900 dark:text-gray-0'
              )}
            >
              一个数据迁移平台
            </h1>
            <p
              className={clsx(
                'font-normal',
                'text-base',
                'text-gray-600 dark:text-gray-300',
                'landing-xs:max-w-[384px]'
              )}
            >
              我们不生产数据，我们只是数据的搬运工，任何时间，任何地点，任何数据，使命必达。
            </p>
          </div>
          <div className={clsx('flex', 'items-center', 'justify-start', 'gap-4', 'landing-lg:gap-6')}>
            <Link
              href="https://demo.1stblue.cloud"
              className={clsx(
                'self-start',
                'rounded-3xl',
                '!text-gray-0 dark:!text-gray-900',
                'bg-refine-blue dark:bg-refine-cyan-alt',
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
              <span className={clsx('text-base', 'font-semibold')}>开始云体验</span>
            </Link>
            <Link to="/docs/tutorial/contributing">
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
                  'bg-refine-blue dark:bg-refine-cyan-alt',
                  'bg-opacity-10 dark:bg-opacity-10',
                  'text-refine-blue dark:text-refine-cyan-alt',
                  ' leading-5',
                  'leading-6',
                  'font-jetBrains-mono',
                  'overflow-hidden',
                  'relative',
                  'group/copy-button',
                  className
                )}
              >
                产品文档
              </button>
            </Link>
          </div>
        </div>
        <div className={clsx('hidden landing-md:block', 'absolute', 'top-0', 'right-0')}>
          <LandingHeroAnimation />
        </div>
      </div>
      <div className={clsx('not-prose', 'w-full', 'px-4 landing-md:px-10')}>
        <h2
          className={clsx(
            'text-2xl landing-sm:text-[32px]',
            'tracking-tight',
            'text-start',
            'p-0',
            'dark:text-gray-0 text-gray-900'
          )}
        >
          <span
            className={clsx(
              'font-semibold',
              'dark:text-refine-green-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.3)]',
              'text-refine-blue drop-shadow-[0_0_30px_rgba(0,128,255,0.3)]'
            )}
          >
            快速
          </span>
          启动 , 操作
          <span
            className={clsx(
              'font-semibold',
              'dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]',
              'text-refine-indigo drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]'
            )}
          >
            简单
          </span>
          , 结果
          <span
            className={clsx(
              'font-semibold',
              'dark:text-refine-red dark:drop-shadow-[0_0_30px_rgba(255,76,77,0.4)]',
              'text-refine-purple drop-shadow-[0_0_30px_rgba(128,0,255,0.3)]'
            )}
          >
            准确
          </span>
        </h2>
      </div>

      {/* <LandingHeroShowcaseSection /> */}
      <img src="/img/opt-video.gif" className="object-none mt-1" alt="" />
    </div>
  );
};

