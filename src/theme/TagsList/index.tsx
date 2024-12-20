import React from 'react';
import Tag from '@theme/Tag';
import { titleCase } from 'title-case';
import clsx from 'clsx';
import { Disclosure, Transition } from '@headlessui/react';
import TriangleDownIcon from '@site/src/pages/components/blog/icons/triangle-down';

const ChevronDownIcon = () => (
  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L4 3.08579L6.29289 0.792893C6.68342 0.402369 7.31658 0.402369 7.70711 0.792893C8.09763 1.18342 8.09763 1.81658 7.70711 2.20711L4.70711 5.20711C4.31658 5.59763 3.68342 5.59763 3.29289 5.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z"
      fill="currentColor"
    />
  </svg>
);
const ChevronRightIcon = () => (
  <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.792893 0.292893C1.18342 -0.0976311 1.81658 -0.0976311 2.20711 0.292893L5.20711 3.29289C5.59763 3.68342 5.59763 4.31658 5.20711 4.70711L2.20711 7.70711C1.81658 8.09763 1.18342 8.09763 0.792893 7.70711C0.402369 7.31658 0.402369 6.68342 0.792893 6.29289L3.08579 4L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z"
      fill="currentColor"
    />
  </svg>
)

const mapLabel = label => {
  // remove `-`
  label = label.replace(/-/g, ' ');

  // replace
  const replace = [
    ['typescript', 'TypeScript'],
    ['javascript', 'JavaScript'],
    ['chakra ui', 'Chakra UI'],
    ['material ui', 'Material UI'],
    ['nextjs', 'Next.js'],
    ['nestjs', 'NestJS'],
    ['css', 'CSS']
  ];

  replace.forEach(element => {
    label = label.replace(element[0], element[1]);
  });

  // title case
  return titleCase(label);
};

const Desktop = ({
  tags,
  collapsed,
  onShowMoreClick
}: {
  tags: any;
  collapsed: boolean;
  onShowMoreClick: (collapsed: boolean) => void;
}) => {
  return (
    <div
      className={clsx(
        'hidden lg:flex',
        'not-prose',
        'justify-between',
        'items-start',
      )}
    >
      <ul
        className={clsx('overflow-hidden', 'flex-1 ml-[-4px]')}
        style={{
          margin: 0,
          padding: 0
        }}
      >
        {tags.map(tag => (
          <li className={clsx('inline-flex', 'm-1')} key={tag.permalink}>
            <Tag {...tag} label={mapLabel(tag.label)} />
          </li>
        ))}
      </ul>
      {/* <label
        onClick={() => onShowMoreClick(!collapsed)}
        className={clsx(
          'flex',
          'items-center',
          'gap-1',
          'cursor-pointer',
          'flex-shrink',
          'no-underline hover:no-underline',
          'text-xs',
          'bg-gray-100 ',
          'text-gray-600 ',
          'rounded',
          'py-1',
          'px-2',
          'mt-1'
        )}
      >
        展示更多
        {collapsed ? <ChevronRightIcon /> : <ChevronDownIcon />}
      </label> */}
    </div>
  );
};

const Mobile = ({ tags }: { tags: any }) => {
  return (
    <div className="mb-10 block w-full lg:hidden">
      <Disclosure>
        {({ open }) => (
          <div className={clsx('rounded-[4px]', 'border border-gray-100 ')}>
            <Disclosure.Button
              className={clsx(
                'bg-gray-50 ',
                'border-b border-gray-100 ',
                'w-full',
                'flex items-center gap-3',
                'px-2 py-2'
              )}
            >
              <TriangleDownIcon
                className={clsx(
                  'h-5 w-5',
                  'text-gray-400 ',
                  'transition-transform duration-200 ease-in-out',
                  {
                    '-rotate-90 transform': !open
                  }
                )}
              />
              <span className={clsx('text-sm', ' text-gray-900')}>Blog Post Tags</span>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="h-[200px] overflow-auto p-2 sm:h-[232px] sm:p-6">
                <ul
                  className={clsx('overflow-hidden', 'flex-1')}
                  style={{
                    margin: 0,
                    padding: 0
                  }}
                >
                  {tags.map(tag => (
                    <li className={clsx('inline-flex', 'm-1')} key={tag.permalink}>
                      <Tag {...tag} label={mapLabel(tag.label)} />
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default function TagsList({ tags }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const priorityTags = [
    'bluepipe',
    'react',
    'nextjs',
    'typescript',
    'tutorial',
    'material-ui',
    'ant-design',
    'docker',
    'comparison'
  ];
  const sortedTags = (tags ?? []).sort((a, b) => {
    const aIndex = priorityTags.indexOf(a.label);
    const bIndex = priorityTags.indexOf(b.label);

    if (aIndex === -1) {
      return bIndex === -1 ? 0 : 1;
    } else {
      return bIndex === -1 ? -1 : aIndex - bIndex;
    }
  });

  return (
    <>
      <Desktop
        collapsed={collapsed}
        tags={sortedTags}
        onShowMoreClick={collapsed => setCollapsed(collapsed)}
      />
      <Mobile tags={sortedTags} />
    </>
  );
}

