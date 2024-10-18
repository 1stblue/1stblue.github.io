import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import { blogPostContainerID } from '@docusaurus/utils-common';
import MDXContent from '@theme/MDXContent';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import html2PDF from 'jspdf-html2canvas';
// import { Date, ReadingTime } from '@site/src/pages/components/blog';
import Date from '../pages/components/blog/Date';
import ReadingTime from '../pages/components/blog/ReadingTime';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export const BlogPostPageView = ({ children }) => {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title, date, formattedDate, readingTime, frontMatter, tags, description, authors } =
    metadata;
  const author = authors[0];

  const {
    siteConfig: { url }
  } = useDocusaurusContext();

  return (
    <BlogPostItemContainer
    //   className={clsx(
    //     'py-10',
    //     'px-4 sm:px-0',
    //     'blog-sm:py-12',
    //     'blog-md:py-16',
    //     'w-full',
    //     'mx-auto',
    //     'max-w-[512px]',
    //     'blog-sm:max-w-screen-blog-sm',
    //     'blog-lg:max-w-screen-content-2xl'
    //   )}
    >
      <div className="text-sm">
        <div className={clsx('flex', 'justify-between', 'sm:flex-row flex-col')}>
          <div className="flex justify-center items-center gap-2">
            <Link to="/blog" className={clsx('!text-gray-500 text-sm no-underline')}>
              ← 返回博客
            </Link>
          </div>
          <div className="flex items-center gap-2 text-gray-600 ">
            <Date date={date} formattedDate={formattedDate} />
            {typeof readingTime !== 'undefined' && (
              <>
                <span className="w-[4px] h-[4px] rounded-full bg-gray-600 "></span>
                <ReadingTime readingTime={readingTime} />
              </>
            )}
            {/* <a
              className="cursor-pointer"
              onClick={() => {
                html2canvas(document.querySelector('.bluepipe-prose-blog-content'), {
                  foreignObjectRendering: false
                }).then(canvas => {
                  var contentWidth = canvas.width;
                  var contentHeight = canvas.height;

                  //一页pdf显示html页面生成的canvas高度;
                  var pageHeight = (contentWidth / 515.28) * 841.89;
                  //未生成pdf的html页面高度
                  var leftHeight = contentHeight;
                  //页面偏移
                  var position = 0;
                  //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                  var imgWidth = 515.28;
                  var imgHeight = (515.28 / contentWidth) * contentHeight;

                  var pageData = canvas.toDataURL('image/jpeg', 1.0);

                  var pdf = new jsPDF('', 'pt', 'a4');

                  //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                  //当内容未超过pdf一页显示的范围，无需分页
                  if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 40, 0, imgWidth, imgHeight);
                  } else {
                    while (leftHeight > 0) {
                      pdf.addImage(pageData, 'JPEG', 40, position, imgWidth, imgHeight);
                      leftHeight -= pageHeight;
                      position -= 841.89;
                      //避免添加空白页
                      if (leftHeight > 0) {
                        pdf.addPage();
                      }
                    }
                  }

                  pdf.save(`${title}.pdf`);
                });
              }}
            >
              下载
            </a> */}
          </div>
        </div>
      </div>
      <div className="p-6 bluepipe-prose-blog-content">
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

export default BlogPostPageView;

