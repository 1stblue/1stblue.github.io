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
