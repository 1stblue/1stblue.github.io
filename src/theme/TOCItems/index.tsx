/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useMemo} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  useTOCHighlight,
  useFilteredAndTreeifiedTOC,
  type TOCHighlightConfig,
} from '@docusaurus/theme-common/internal';
import TOCItemTree from '@theme/TOCItems/Tree';
import type {Props} from '@theme/TOCItems';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
// import Tags from '@site/src/pages/components/blog/Tags';

export default function TOCItems({
  toc,
  className = 'table-of-contents table-of-contents__left-border',
  linkClassName = 'table-of-contents__link',
  linkActiveClassName = undefined,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}: Props): JSX.Element | null {
  const themeConfig = useThemeConfig();

  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;

  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });

  const tocHighlightConfig: TOCHighlightConfig | undefined = useMemo(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel,
      };
    }
    return undefined;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(tocHighlightConfig);

  const {pathname} = useLocation();
  return (
    <div>
      {/* <Tags /> */}
      <TOCItemTree
      toc={tocTree}
      className={clsx(className, pathname.includes('/blog') && 'mt-[20px]' )}
      linkClassName={linkClassName}
      {...props}
      />
    </div>
  );
}
