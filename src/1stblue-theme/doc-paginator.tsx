import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { ArrowLeftIcon } from './icons/arrow-left';
import { ArrowRightIcon } from './icons/arrow-right';

export const DocPaginator = props => {
  const { previous, next } = props;

  return (
    <div className={clsx('grid grid-cols-2', 'gap-4', 'w-full')}>
      {previous && (
        <Link
          href={previous.permalink}
          className={clsx(
            'pagination-nav__link',
            'group',
            'flex-1',
            'p-4',
            'rounded-lg',
            'border border-gray-200 ',
            'hover:bg-gray-100 ',
            'hover:no-underline'
          )}
        >
          <div className="flex-1 flex items-start justify-center flex-col gap-2 text-left">
            <div
              className={clsx(
                'flex items-center gap-2',
                'text-xs leading-3 content-md:text-sm content-md:leading-6',
                'text-gray-500 ',
                'text-xs content-md:text-sm content-4xl:text-lg'
              )}
            >
              <span
                className={clsx(
                  'bg-gray-100 ',
                  'group-hover:bg-gray-50 ',
                  'flex items-center justify-center',
                  'rounded',
                  'w-6 h-6'
                )}
              >
                <ArrowLeftIcon className="text-gray-400 " />
              </span>
              Previous
            </div>
            <span
              className={clsx(
                'text-xs content-md:text-base content-4xl:text-xl',
                'text-bluepipe-link-light ',
                'underline',
                'ml-8'
              )}
            >
              {previous.title}
            </span>
          </div>
        </Link>
      )}
      {next && (
        <Link
          href={next.permalink}
          className={clsx(
            'pagination-nav__link',
            'pagination-nav__link--next',
            'group',
            'flex-1',
            'p-4',
            'rounded-lg',
            'border border-gray-200 ',
            'hover:bg-gray-100 ',
            'hover:no-underline',
            !previous && 'col-start-2'
          )}
        >
          <div className="flex-1 flex items-end justify-center flex-col gap-2 text-right">
            <div
              className={clsx(
                'flex items-center gap-2',
                'text-xs leading-3 content-md:text-sm content-md:leading-6',
                'text-gray-500 ',
                'text-xs content-md:text-sm content-4xl:text-lg'
              )}
            >
              Next
              <span
                className={clsx(
                  'bg-gray-100 ',
                  'group-hover:bg-gray-50 ',
                  'flex items-center justify-center',
                  'rounded',
                  'w-6 h-6'
                )}
              >
                <ArrowRightIcon className="text-gray-400 " />
              </span>
            </div>

            <span
              className={clsx(
                'text-xs content-md:text-base content-4xl:text-xl',
                'text-bluepipe-link-light ',
                'underline',
                'mr-8'
              )}
            >
              {next.title}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
};

