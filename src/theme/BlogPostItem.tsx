import React from 'react';
import Link from '@docusaurus/Link';
import dayjs from 'dayjs';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import clsx from 'clsx';
import Date from '../pages/components/blog/Date';

export default function BlogPostItem({ className }) {
  const { metadata } = useBlogPost();
  const { permalink, title, date, frontMatter, description, tags } = metadata;

  const formattedDate = dayjs(date).format('YYYY年MM月DD日');

  const author = metadata.authors[0];

  return (
    <Link
      itemProp="url"
      to={permalink}
      className="no-underline border-[1px] border-transparent hover:border-[#e5e7eb] rounded-[24px] p-[16px]"
      rel="noopener dofollow"
    >
      <BlogPostItemContainer className={className}>
      <div>
        <Link itemProp="url" to={permalink}>
          <div className="not-prose relative m-0 h-40 hover:brightness-90">
            <img
              src={`${frontMatter.image}`}
              alt={title}
              className="absolute inset-0 mt-0 h-full w-full rounded-[12px] object-cover transition duration-150"
              loading="lazy"
            />
          </div>
        </Link>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <span className={clsx('text-gray-600 text-[14px] pt-[21px] pb-[4px]')}>
            <Date date={date} formattedDate={formattedDate} />
          </span>
        </div>

        <div className="py-2">
          <Link
            itemProp="url"
            to={permalink}
            className="no-underline"
            rel="noopener dofollow"
          >
            <div
              className={clsx(
                'text-xs sm:text-sm md:text-2xl lg:text-base 2xl:text-xl pb-[4px]',
                'text-gray-700 ',
                'font-lg',
                'font-bold',
                'leading-6',
                'hover:opacity-75',
              )}
            >
              {title}
            </div>
          </Link>
          <div
            className={clsx(
              'text-[16px]',
              'line-clamp-3 text-gray-700'
            )}
          >
            {description}
          </div>
        </div>

        <div className={clsx('my-2 flex gap-1 md:mb-4', 'flex flex-wrap items-center')}>
          {tags.map(tag => (
            <Link
              className={clsx(
                'text-xs',
                'bg-gray-100 ',
                'text-gray-600 hover:text-bp-blue-1 ',
                'no-underline',
                'rounded',
                'px-2 py-1'
              )}
              href={tag.permalink}
              key={tag.permalink}
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </div>
      </BlogPostItemContainer>
    </Link>
  );
}

