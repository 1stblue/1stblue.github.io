/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import type {Props} from '@theme/BlogLayout';
import { useLocation } from '@docusaurus/router';

export default function BlogLayout(props: Props): JSX.Element {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  
  const { pathname } = useLocation();
  return (
    <Layout {...layoutProps}>
      <div className={clsx('margin-vert--lg flex')}>
        <div className='flex-1 flex'>
        <BlogSidebar sidebar={sidebar} />
          <main className={clsx('w-full', pathname !== '/blog/' && pathname !== '/blog' && 'mt-[36px]')}>
            {children}
          </main>
        </div>
        {toc && <div className="flex-shrink-0 ml-[10px]">{toc}</div>}
      </div>
    </Layout>
  );
}
