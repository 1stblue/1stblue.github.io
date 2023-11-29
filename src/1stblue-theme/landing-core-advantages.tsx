import clsx from 'clsx';
import React, { FC } from 'react';

import Link from '@docusaurus/Link';

const list = [
  {
    tag: '鲁棒性',
    title: '不找事，有兜底',
    description: 'Fully Tested；安全为重，风控先行；流批融合与应急响应',
    theme: 'heading-base--theme-aqua-gradient',
    items: [
      {
        title: 'Fully Tested',
        link: '/docs/quick-start',
        description:
          'Deploy to your own infrastructure without worrying about regulations, performance, and stability. Maintain your current security best practices with no compromises.'
      },
      {
        title: '安全为重，风控先行',
        link: '/docs/quick-start',
        description: '并发控制、开关集合、无锁表、NO_SQL_CACHE、PGA内存等'
      },
      {
        title: '流批融合与应急响应',
        link: '/docs/quick-start',
        description:
          'Out-of-the-box support for widely accepted authorization models including ACL, RBAC & ABAC.'
      }
    ]
  },
  {
    tag: '极致效率',
    title: '⾼效、⾃动、⾃适应',
    description: '运⾏效率；⾃适应弹性调度；极简体验，⽤完即⾛',
    theme: 'heading-base--theme-blue-gradient',
    items: [
      {
        title: '运⾏效率',
        link: '/docs/quick-start',
        description:
          'Deploy to your own infrastructure without worrying about regulations, performance, and stability. Maintain your current security best practices with no compromises.'
      },
      {
        title: '⾃适应弹性调度',
        link: '/docs/quick-start',
        description: '网络分配和serverless'
      },
      {
        title: '极简体验，⽤完即⾛',
        link: '/docs/quick-start',
        description:
          'Out-of-the-box support for widely accepted authorization models including ACL, RBAC & ABAC.'
      }
    ]
  },
  {
    tag: '可持续发展',
    title: '⽆后顾之忧',
    description: '20+高质量连接器，可扩展性强；技术中立，无任何锁定；扩展与集成简单',
    theme: 'heading-base--theme-marigold-gradient',
    items: [
      {
        title: '可扩展性强',
        link: '/docs/quick-start',
        description:
          'Deploy to your own infrastructure without worrying about regulations, performance, and stability. Maintain your current security best practices with no compromises.'
      },
      {
        title: '技术中立，无任何锁定',
        link: '/docs/quick-start',
        description: '网络分配和serverless'
      },
      {
        title: '扩展与集成简单',
        link: '/docs/quick-start',
        description:
          'Out-of-the-box support for widely accepted authorization models including ACL, RBAC & ABAC.'
      }
    ]
  }
];

type Props = {
  className?: string;
};

export const LandingCoreAdvantages: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, 'w-full')}>
      {list.map((item, index) => (
        <>
          <div key={index} className={clsx('heading-base', item.theme)}>
            <div className="heading-base__inner">
              <div className="heading-base__eyebrow">
                <span
                  className={clsx(
                    'font-normal',
                    'text-base',
                    'text-gray-600 dark:text-gray-300',
                    'text--size-eyebrow'
                  )}
                >
                  {item.tag}
                </span>
              </div>
              <h2 className="heading-base__title">
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
                  {item.title}
                </h1>
              </h2>
              <div className="heading-base__subhead">
                <span className="text--size-subhead-lg">
                  <p
                    className={clsx(
                      'font-normal',
                      'text-base',
                      'text-gray-600 dark:text-gray-300',
                      'landing-xs:max-w-[384px]'
                    )}
                  >
                    <span>{item.description}</span>
                  </p>
                </span>
              </div>
            </div>
            <div className="heading-base__background"></div>
          </div>
          <div
            className={clsx(
                "mt-12 landing-sm:mt-16 landing-md:mt-20 landing-lg:mt-40",
                'pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40',
              'grid',
              'grid-cols-1 landing-md:grid-cols-2 landing-lg:grid-cols-3',
              'gap-4 landing-sm:gap-12 landing-md:gap-6'
            )}
          >
            {item.items.map((child, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    'not-prose',
                    'p-4 landing-sm:p-10',
                    'flex',
                    'flex-col landing-sm:flex-row landing-md:flex-col',
                    'items-start',
                    'gap-6',
                    'dark:bg-landing-noise',
                    'dark:bg-gray-800 bg-gray-50',
                    'rounded-2xl landing-sm:rounded-3xl'
                  )}
                >
                  <div className={clsx('flex', 'flex-col', 'gap-4', 'h-full')}>
                    <div
                      className={clsx(
                        'text-xl',
                        'font-semibold',
                        'flex-none',
                        'text-gray-900 dark:text-gray-0'
                      )}
                    >
                      {child.title}
                    </div>
                    <div className={clsx('text-base', 'flex-grow', 'dark:text-gray-400 text-gray-600')}>
                      {child.description}
                    </div>
                    <Link to={child.link} className={'flex items-center flex-none'}>
                      查看更多
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ))}
    </div>
  );
};

