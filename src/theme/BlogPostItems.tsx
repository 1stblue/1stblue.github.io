import React from 'react';
import BlogPostItem from '@theme/BlogPostItem';
import type {Props} from '@theme/BlogPostItems';
import {BlogPostProvider, useBlogPost} from '@docusaurus/plugin-content-blog/client';
import clsx from 'clsx';
import TagsList from '@theme/TagsList';
import { flatMap, groupBy, map } from 'micro-dash';

export default function BlogPostItems({
    items,
    tags,
    component: BlogPostItemComponent = BlogPostItem,
    isAuthorPage,
    isTagsPage
  }) {
    /** 从items中提取tags数据 */
    const arr = flatMap(items, obj => obj.content.metadata.tags);
    const grouped = groupBy(arr, item => item.label);
    tags = map(grouped, (items, label) => ({
      label,
      permalink: items[0]?.permalink,
      count: items.length // 计算 count
    }));

  return (
    <div
    // className={clsx(
    //   'px-4',
    //   'blog-md:px-7',
    //   'blog-2xl:px-0',
    //   !isAuthorPage && !isTagsPage && 'blog-sm:pb-16 blog-md:pb-8 blog-2xl:pb-12 pb-10',
    //   !isAuthorPage && !isTagsPage && 'blog-md:pt-16 blog-2xl:pt-20',
    //   (isAuthorPage || isTagsPage) && 'py-8',
    //   'max-w-[512px]',
    //   'blog-md:max-w-screen-blog-md',
    //   'blog-2xl:max-w-screen-blog-md',
    //   'w-full',
    //   'mx-auto'
    // )}
  >
    {!isAuthorPage && !isTagsPage && (
      <>
        <div
          className={clsx(
            'flex flex-col blog-md:flex-row items-start lg:items-center justify-between',
            'mb-4 lg:mb-8',
            'px-0 blog-sm:px-6',
            'not-prose'
          )}
        >
          <h2
            className={clsx(
              '!m-0 !mt-0 !mb-0 p-0',
              'blog-lg:mb-12 blog-md:mb-8 mb-8',
              'text-xl blog-sm:text-4xl blog-lg:text-5xl',
              'text-gray-900 ',
              'font-semibold'
            )}
          >
            所有文章
          </h2>
          <p
            className={clsx(
              'text-sm blog-md:text-base blog-lg:text-xl',
              'blog-md:max-w-[624px]',
              'mt-6 lg:mt-0',
              'text-gray-500 '
            )}
          >
            <b>Bluepipe 技术博客</b> - 一个用于 Bluepipe 产品生态系统和网络开发的资源。在这里，我们发表有见地的文章，揭开复杂的概念，探索新的趋势，并提供实用的提示和专业的指导，为你的产品使用旅程保驾护航。
          </p>
        </div>
        <TagsList tags={tags} />
      </>
    )}

    <div
      className={clsx(
        'grid',
        'grid-cols-3',
        'gap-4',
        'pt-6',
        'py-[24px]'
        // isAuthorPage ? 'blog-md:pt-0' : 'blog-md:pt-12'
      )}
    >
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
          <BlogPostItemComponent className='border-[1px] rounded-[12px] p-4'>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </div>
  </div>
  )
}
