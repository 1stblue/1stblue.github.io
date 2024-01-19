import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useSidebarBreadcrumbs, useHomePageRoute } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { HomeIcon } from './icons/home';
import { ChevronRightIcon } from './icons/chevron-right';
import { useTWBreakpoints } from '../hooks/use-tw-breakpoints';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const hiddenBreadcrumbText = '...';

export const DocBreadcrumbs = () => {
  const breakpoints = useTWBreakpoints();
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  const breadcrumbList = useMemo(() => {
    const breadcrumbsLength = breadcrumbs.length;
    const shouldRenderDotdotdot = breadcrumbsLength >= 3 && !breakpoints.sm;

    if (!shouldRenderDotdotdot) {
      return breadcrumbs;
    }

    const firstBreadcrumb = breadcrumbs[0];
    const lastBreadcrumb = breadcrumbs[breadcrumbsLength - 1];
    const secondLastBreadcrumb = breadcrumbs[breadcrumbsLength - 2];

    return [firstBreadcrumb, hiddenBreadcrumbText, lastBreadcrumb, secondLastBreadcrumb];
  }, [breadcrumbs]);

  return (
    <nav
      className={clsx('bluepipe-breadcrumbs', 'pb-6')}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs'
      })}
    >
      {breadcrumbList.find(item => item.label === 'Examples') && (
        <div
          className={clsx('example-full-title', 'hidden', 'h-0 w-0', 'overflow-hidden')}
          aria-hidden={true}
        >
          {breadcrumbList
            .slice(2)
            .map(item => item.label)
            .join(' ')}
          {' Example'}
        </div>
      )}
      <ul
        className={clsx('breadcrumbs', 'flex flex-wrap items-center')}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {homePageRoute && (
          <li>
            <Link href="/docs">
              <HomeIcon className="text-gray-400" />
              <span className="sr-only">Documentation</span>
            </Link>
          </li>
        )}
        {breadcrumbList.map((item, idx) => {
          const isHidden = item === hiddenBreadcrumbText;
          const isLast = idx === breadcrumbs.length - 1;

          return (
            <li key={idx} className={clsx('flex flex-row flex-nowrap')}>
              <ChevronRightIcon className="text-gray-300" />
              {isHidden ? (
                <div className="text-gray-600">{hiddenBreadcrumbText}</div>
              ) : item.href && !isLast ? (
                <Link href={item.href} className={clsx('text-gray-600', 'text-sm', 'leading-6')}>
                  {item.label}
                </Link>
              ) : (
                <span className={clsx(isLast ? 'text-gray-500' : 'text-gray-600', 'text-sm', 'leading-6')}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
          {/* <a
              className="cursor-pointer text-[#1677ff] text-sm ml-4"
              onClick={() => {
                html2canvas(document.querySelector('.bluepipe-prose'), {
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

                  pdf.save(`${breadcrumbList?.[breadcrumbList.length - 1]?.label}.pdf`);
                });
              }}
            >
              下载
            </a> */}
      </ul>
    </nav>
  );
};

