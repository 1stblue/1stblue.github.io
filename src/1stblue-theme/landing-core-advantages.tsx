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
        link: '/docs',
        description:
          '通过全自动化的集成测试框架来发现或者验证系统中的薄弱环节或者边界值。'
      },
      {
        title: '安全为重，风控先行',
        link: '/docs',
        description: '并发控制、开关集合、无锁表、NO_SQL_CACHE、PGA内存等'
      },
      {
        title: '流批融合与应急响应',
        link: '/docs',
        description:
          '通过全自动化的集成测试框架来发现或者验证系统中的薄弱环节或者边界值。'
      }
    ]
  },
  {
    tag: '性能',
    title: '极致效率',
    description: '运⾏效率；⾃适应弹性调度；极简体验，⽤完即⾛',
    theme: 'heading-base--theme-blue-gradient',
    items: [
      {
        title: '运⾏效率',
        link: '/docs',
        description:
          '性能在日常运行中往往不是关键问题，但性能储备是应急响应质量的关键指标。在某个客户测试现场，我们的软件完成了 45 分钟内将 30 亿行（约 500GB）无索引单表同步到另一个数据库，性能远超竞争对手'
      },
      {
        title: '⾃适应弹性调度',
        link: '/docs',
        description: '满足数据交付 SLA 的前提下，基于网络连通性、网络价格、动态负载等进行最高效率的调度分配'
      },
      {
        title: '极简体验，⽤完即⾛',
        link: '/docs',
        description:
          '基于我们对数据库的深刻理解，往往默认参数就能提供最好的效果，自动学习并进行调度优化，以尽可能地减少人工运维工作'
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
        link: '/docs',
        description:
          'Deploy to your own infrastructure without worrying about regulations, performance, and stability. Maintain your current security best practices with no compromises.'
      },
      {
        title: '技术中立，无任何锁定',
        link: '/docs',
        description: '坚持无供应商锁定，无网络环境锁定。我们的软件能够方便地部署在阿里云、AWS、Azure、甚至您自己的笔记本电脑上，从而使您的数据能够安全、自由地流动。'
      },
      {
        title: '集成简单',
        link: '/docs',
        description:
          '我们提供了不同的 SDK 方便客户将我们的能力集成到别的产品中去，从而实现更顺滑的体验'
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

