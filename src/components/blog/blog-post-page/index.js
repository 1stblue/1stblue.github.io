import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import {blogPostContainerID} from '@docusaurus/utils-common';
import MDXContent from '@theme/MDXContent';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';

import {Date, ReadingTime} from '@site/src/components/blog/common';

export const BlogPostPageView = ({children}) => {
    const {metadata, isBlogPostPage} = useBlogPost();
    const {permalink, title, date, formattedDate, readingTime, frontMatter, tags, description, authors} =
        metadata;
    const author = authors[0];

    const {
        siteConfig: {url}
    } = useDocusaurusContext();

    return (
        <BlogPostItemContainer
            className={clsx(
                'py-10',
                'px-4 sm:px-0',
                'blog-sm:py-12',
                'blog-md:py-16',
                'w-full',
                'mx-auto',
                'max-w-[512px]',
                'blog-sm:max-w-screen-blog-sm',
                'blog-lg:max-w-screen-content-2xl'
            )}
        >
            <div className="blog-sm:px-6">
                <div className="mb-6 text-sm">
                    <div className={clsx('flex', 'justify-between', 'sm:flex-row flex-col')}>
                        <div className="flex justify-center items-center gap-2"></div>
                        <div className="flex items-center gap-2 text-gray-600 ">
                            <Date date={date} formattedDate={formattedDate}/>
                            {typeof readingTime !== 'undefined' && (
                                <>
                                    <span className="w-[4px] h-[4px] rounded-full bg-gray-600 "></span>
                                    <ReadingTime readingTime={readingTime}/>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <h1 className="text-xl md:text-4xl" itemProp="headline">
                    {isBlogPostPage ? (
                        title
                    ) : (
                        <Link itemProp="url" to={permalink}>
                            {title}
                        </Link>
                    )}
                </h1>
                <div id={blogPostContainerID} className="markdown" itemProp="articleBody">
                    <MDXContent>{children}</MDXContent>
                </div>
            </div>
        </BlogPostItemContainer>
    );
};

