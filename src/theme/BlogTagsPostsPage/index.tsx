/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useBlogTagsPostsPageTitle} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogTagsPostsPage';
import BlogPostItems from '@theme/BlogPostItems';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import TagsList from '../TagsList';
import ArrowRight from '../../../static/icons/arrow-right.svg';

function BlogTagsPostsPageMetadata({tag}: Props): JSX.Element {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

function BlogTagsPostsPageContent({
  tag,
  items,
  sidebar,
  listMetadata,
}: Props): JSX.Element {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <BlogLayout sidebar={sidebar}>
      {/* {tag.unlisted && <Unlisted />} */}
      <header className="">
        <div className='flex justify-between'>
          <Link onClick={() => window.history.go(-1)} className={clsx('!text-gray-500 hover:text-bp-blue-1 text-sm no-underline')}>
                ← 返回博客
          </Link>
          <Link href={tag.allTagsPath} className="no-underline flex text-[14px] group items-center">
            <Translate
              id="theme.tags.tagsPageLink"
              description="The label of the link targeting the tag list page">
              查看所有分类标签
            </Translate>
            <ArrowRight className='pl-[5px] h-[18px] w-[12px] group-hover:stroke-blue-500' />
          </Link>
        </div>
        <Heading as="h2" className='mt-[10px]'>{`有${tag?.count}篇${tag?.label}相关的文章`}</Heading>
      </header>
      <BlogPostItems items={items} showTitle={false} isTagsPage={true} />
      <BlogListPaginator metadata={listMetadata} />
    </BlogLayout>
  );
}
export default function BlogTagsPostsPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <BlogTagsPostsPageMetadata {...props} />
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
