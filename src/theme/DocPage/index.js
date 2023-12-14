import React from 'react';
import clsx from 'clsx';
import { HtmlClassNameProvider, ThemeClassNames, PageMetadata } from '@docusaurus/theme-common';
import {
  docVersionSearchTag,
  DocsSidebarProvider,
  DocsVersionProvider,
  useDocRouteMetadata
} from '@docusaurus/theme-common/internal';
import DocPageLayout from '@theme/DocPage/Layout';
import SearchMetadata from '@theme/SearchMetadata';

function DocPageMetadata(props) {
  const { versionMetadata } = props;
  return (
    <>
      <SearchMetadata
        version={versionMetadata.version}
        tag={docVersionSearchTag(versionMetadata.pluginId, versionMetadata.version)}
      />
      <PageMetadata>
        {versionMetadata.noIndex && <meta name="robots" content="noindex, nofollow" />}
      </PageMetadata>
    </>
  );
}

export default function DocPage(props) {
  const { versionMetadata } = props;

  const currentDocRouteMetadata = useDocRouteMetadata(props);

  const fallbackSidebarName = Object.keys(versionMetadata.docsSidebars)[0];
  const fallbackSidebarItems = versionMetadata.docsSidebars[fallbackSidebarName];

  return (
    <>
      <DocPageMetadata {...props} />
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.docsPages,
          ThemeClassNames.page.docsDocPage,
          props.versionMetadata.className
        )}
      >
        <DocsVersionProvider version={versionMetadata}>
          <DocsSidebarProvider
            name={
              currentDocRouteMetadata?.sidebarName ?? fallbackSidebarName
            }
            items={
              currentDocRouteMetadata?.sidebarItems ?? fallbackSidebarItems
            }
          >
            <DocPageLayout>
              {currentDocRouteMetadata?.docElement ?? (
                <div class="hero min-h-screen">
                  <div class="hero-content text-center">
                    <div class="max-w-md">
                      <h1 class="text-5xl font-bold">404</h1>
                      <p class="pt-6">我们找不到您要找的页面。</p>
                      <p class="pb-6">请联系原始链接来源网站的所有者，并告知他们链接已损坏。</p>
                    </div>
                  </div>
                </div>
              )}
            </DocPageLayout>
          </DocsSidebarProvider>
        </DocsVersionProvider>
      </HtmlClassNameProvider>
    </>
  );
}

