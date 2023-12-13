import React from 'react';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import { CommonLayout } from '@site/src/1stblue-theme/common-layout';
import { CommonHeader } from '@site/src/1stblue-theme/common-header';
import { LandingFooter } from '@site/src/1stblue-theme/landing-footer';
import { MantineProvider } from '@mantine/core/';
const ConnectorsLayout = ({ children, title }: React.PropsWithChildren<{ title: string }>) => {
  return (
    <CommonLayout>
      <Head title={`${title} | bluepipe`}>
        <html data-page="connectors" data-customized="true" />
      </Head>
      <div className={clsx('refine-prose, pb-16')}>
        <CommonHeader hasSticky />
        <div
          className={clsx(
            'gap-16 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40',
            'w-full max-w-[83%]',
            'px-2 landing-sm:px-0',
            //   'pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40',
            'mx-auto'
          )}
        >
          <MantineProvider withGlobalStyles withNormalizeCSS>
            {children}
          </MantineProvider>
        </div>
      </div>
      <LandingFooter />
    </CommonLayout>
  );
};

export default ConnectorsLayout;

