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
     className='mt-[20px]'
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
        'pt-6',
        'py-[24px]'
        // isAuthorPage ? 'blog-md:pt-0' : 'blog-md:pt-12'
      )}
    >
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </div>
  </div>
  )
}
